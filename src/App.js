import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contatct';
import Post from './Components/Post'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/posts/:post_id' component={Post} />
          </switch>
        </div>
        
      </BrowserRouter>
    );
 }
}

export default App;
 