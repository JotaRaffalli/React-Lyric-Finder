import React, { Component } from 'react'
import musicPlayer from '../../assets/music-player.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      <di>
        <nav className="navbar navbar-dark bg-dark mb-5">
          <div className="container d-flex justify-content-between">

            <span className="navbar-brand mb-0 h1">
              <img alt="lyric search app" src={musicPlayer} height="25"></img>  Lyric Search App
        </span>
            <Button color="dark" onClick={this.toggle}>How is this App build?</Button>
          </div>
        </nav>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <p>
              This App was build to test <strong>React's Context API</strong> for global state management. This is a nice utility that can be used for small or even normal scale apps without the need of some major libraries like <i>Redux</i>.
              <br/><br/>
              Techs in detail below:
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                React 16.5^
              </li>
              <li className="list-group-item">
                Album Cover API              
              </li>
              <li className="list-group-item">
                Musix Match API
              </li>
              <li className="list-group-item">
                ReactStrap
              </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Got it!</Button>
          </ModalFooter>
        </Modal>
      </di>

      
    )
  }

}

export default Navbar
