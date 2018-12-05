import React, { Component } from 'react'
import musicPlayer from '../../assets/music-player.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

const hStyle = {
  color: 'white',
};


const listStyle= {
  color: "#226df7"
}
class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }
  
  componentDidMount() {
    console.log("%cLyric Search App!", "color: red; font-size:25px");
    console.log("%cContact info: raffallijoseluis@gmail.com", "color: grey; font-size:15px");
  }

  toggleDrop() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-info bg-info mb-5">
          <div className="container d-flex justify-content-between">

            <span className="navbar-brand mb-0 px-0">
              <img className="mr-2" alt="lyric search app" src={musicPlayer} height="25"></img> 
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Lyric Search App</Link> 
            </span>
            
            <span><a className="btn  px-0" href="https://www.raffallijoseluis.com.ve"><h4 className="my-0" style={hStyle}>Jose Luis Raffalli</h4></a></span>
            
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
              <DropdownToggle caret color="info" >
                <span style={{fontSize:18}}>Information</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>General Info</DropdownItem>
                <DropdownItem onClick={this.toggle2}>Application Description</DropdownItem>
                <DropdownItem onClick={this.toggle}>How was this app built?</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
          </div>
        </nav>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>How is it build?</ModalHeader>
          <ModalBody>
            <p>
              This App was build to test <b>React's Context API</b> for global state management. It is a nice utility that can be used for small or normal scale apps without the need of some major players such as <i>Redux</i>.
            </p> 
            <h5>Techs in detail below:</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <b style={listStyle}>Framework/Library</b>: React 16.5 ⚛
              </li>
              <li className="list-group-item">
                <b style={listStyle}>Album Cover</b>: Audioscrobbler 📷          
              </li>
              <li className="list-group-item">
                <b style={listStyle}>Lyrics</b>: Musix Match API 🎵
              </li>
              <li className="list-group-item">
                <b style={listStyle}>Styles</b>: ReactStrap ✨
              </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Got it!</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>App's Information</ModalHeader>
          <ModalBody>
            <p className="lead text-center">
              Basic application I made with React Js that searches for song lyrics and it's album cover through requests of external APIs using Axios. 
            </p> 
            <div className="lead text-center">            
              <a className="btn btn-primary btn-block" href="mailto:raffallijoseluis@gmail.com" >Contact</a>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle2}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>

      
    )
  }

}

export default Navbar
