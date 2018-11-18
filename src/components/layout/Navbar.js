import React, { Component } from 'react'
import musicPlayer from '../../assets/music-player.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'

const hStyle = {
  color: 'white'
};
class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-info bg-info mb-5">
          <div className="container d-flex justify-content-between">

            <span className="navbar-brand mb-0">
              <img className="mr-2" alt="lyric search app" src={musicPlayer} height="25"></img> 
              <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">Lyric Search App</Link> 
            </span>
            
            <span><a className="btn" href="https://www.raffallijoseluis.com.ve"><h4 className="my-0" style={hStyle}>Jose Raffalli</h4></a></span>
            <Button className="btn btn-info"  onClick={this.toggle}><h6 className="my-0">How was this App build?</h6></Button>
          </div>
        </nav>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>How is it build?</ModalHeader>
          <ModalBody>
            <p>
              This App was build to test <u>React's Context API</u> for global state management. It is a nice utility that can be used for small or normal scale apps without the need of some major players such as <i>Redux</i>.
              <br/><br/>
              <h5>Techs in detail below:</h5>
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                Framework: React 16.5
              </li>
              <li className="list-group-item">
                Album Cover: Audioscrobbler            
              </li>
              <li className="list-group-item">
                Lyrics: Musix Match API
              </li>
              <li className="list-group-item">
                Styles: ReactStrap
              </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Got it!</Button>
          </ModalFooter>
        </Modal>
      </div>

      
    )
  }

}

export default Navbar
