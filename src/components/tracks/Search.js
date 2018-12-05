import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../layout/spinner'
import {Consumer} from '../../context'

class Search extends Component {
  
    state = {
        trackTitle: '',
        isLoading: false,
        description: ''
    }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    Math.floor(Math.random()*2) === 0 ? this.setState({description:'Get the lyrics for any Song!'}) : this.setState({description:'This is one of my personal projects'}) 
  }

  findTrack = (dispatch, e) => {
    e.preventDefault()
    this.setState({isLoading: true})
    axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_MM_ROOT}track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}
    `)
    .then(res => {
      dispatch(
        {
          type:'SEARCH_TRACKS',
          payload: res.data.message.body.track_list
        }
      )
      this.setState({trackTitle: '', isLoading: false})
    })
    .catch(err => console.log(err))
    
  }


  render() {
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value
            return(
              <div className="card card-body mb-5 p-a">
                <h1 className="display-4 text-center">
                  Search for a Song
                </h1>
                <p className="lead text-center">{this.state.description}</p>

                <form onSubmit={this.findTrack.bind(this, dispatch)}>
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
                  <button className="btn btn-custom btn-lg btn-block mb-5" type="submit">
                    Search
                  </button>
                </form>
                
                {this.state.isLoading && <Spinner></Spinner>}
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Search