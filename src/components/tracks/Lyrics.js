import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../layout/spinner';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'




class Lyrics extends Component {

    state = {
        track: {},
        lyrics: {},
        albumArt: {}
    }

async componentDidMount() {
    // Track Lyric
   await axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_MM_ROOT}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}
    `)
    .then(res => {
        this.setState({lyrics: res.data.message.body.lyrics})

        // Track info
        return axios.get(
            `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_MM_ROOT}track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}
        `)
    }).then(res => {
        this.setState({track: res.data.message.body.track})
    })
    .catch( err => console.log(err))

    //album cover
    await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.track.album_name}&api_key=9d75fef99463652339f393a066f00899&format=json`)
    .then(res => {
        this.setState({albumArt: res.data.results.albummatches.album}) 
    })
    .catch( err => console.log(err))
}



  render() {
    const {track, lyrics, albumArt} = this.state
    

    if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0 || albumArt === undefined || Object.keys(albumArt).length === 0)
      {
        return <Spinner></Spinner>
      }
    else {
        console.log(track)
        
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4"><i className="fas fa-arrow-left"></i> Go Back</Link>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <h5 className="card-header">
                                    <span className="text-info">{track.track_name}</span> by <span className="text-secondary">{track.artist_name}</span>
                                </h5>
                                <div className="card-body">
                                    <p className="card-text">
                                        {lyrics.lyrics_body.slice(0, -74)}
                                    </p>
                                    <p>
                                        <strong>
                                            Hey! Did you enjoy it?
                                        </strong>
                                        <br />
                                        This is just some part of the song's lyrics I display for my portafolio app.
                                        To see whole lyrics please head over to the Musix Match page!
                                    </p>

                                </div>
                            </div>

                            <ul className="list-group mt-3">
                                <li className="list-group-item">
                                    <strong>Album</strong>: {track.album_id}
                                </li>
                                <li className="list-group-item">
                                    <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name || "none"}
                                </li>
                                <li className="list-group-item">
                                    <strong>Explicit words</strong>:{track.explicit === 0 ? ' No' : ' Yes'}
                                </li>
                                <li className="list-group-item">
                                    <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <img src={ albumArt[0].image[3][Object.keys(albumArt[0].image[3])[0]] || "http://s.mxmcdn.net/images-storage/albums/nocover.png"} alt={`Album cover ${track.album_name}`} className="img-thumbnail"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
  }
}

export default Lyrics