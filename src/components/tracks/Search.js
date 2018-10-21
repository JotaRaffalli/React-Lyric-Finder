import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'

class Search extends Component {
  
    state = {
        trackTitle: ''
    }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  findTrack = (e) => {
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_MM_ROOT}track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}
    `).then(res => console.log(res.data)).catch(err => console.log(err))
  }


  render() {
    return (
      <Consumer>
        {
          value => {
            return(
              <div className="card card-body mb-4 p-a">
                <h1 className="display-4 text-center">
                  <i className="fa fa-music"></i> Search For A Song
                </h1>
                <p className="lead text-center">Get the lyrics for any Song</p>

                <form onSubmit={this.findTrack}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control form-control-lg"  
                      placeholder="Song Title..." 
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    >
                    </input>
                  </div>
                  <button className="btn btn-info btn-lg btn-block mb-5" type="submit">
                    Search Song
                  </button>
                </form> 
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Search