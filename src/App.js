import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import {Provider} from './context'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>            
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
            </Switch>
          </div>
          <Footer/>
        </React.Fragment>
      </Router> 
      </Provider>     
    );
  }
}

export default App;
