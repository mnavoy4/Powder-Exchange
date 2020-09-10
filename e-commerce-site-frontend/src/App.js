import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Listing from './Listing';
import Cart from './Cart'
import SignIn from './SignIn';

export default class App extends React.Component {

  state = {
    sideBarOpen: false
  }

  toggleSidebar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div className='grid-container'>
          <header className='header'>
            <div className='brand'>
              <button onClick={this.toggleSidebar}>
                &#9776;
              </button>
              <Link to="/" >Amazona</Link> 
            </div>
            <div className='header-links'>
              <a href='cart'>Cart</a>
              <Link to='/signin'>Sign in</Link>
              {/* <a href='signin'>Sign in</a> */}
            </div>
          </header>
            <aside className={`sidebar ${this.state.sideBarOpen ? "open" : null}`}>
              <h3>Shopping Categories</h3>
              <button className='sidebar-close-button' onClick={this.toggleSidebar}>x</button>
              <ul>
                <li>
                  <a href='/'>Skiis</a>
                </li>
                <li>
                  <a href='/'>Snowboards</a>
                </li>
                <li>
                  <a href='/'>Jackets</a>
                </li>
                <li>
                  <a href='/'>Pants</a>
                </li>
              </ul>
            </aside>
          <main className='main'>
            <div className='content'>
              <Route path='/signin' component={SignIn} />
              <Route path='/listings/:id' component={Listing}/>
              <Route path='/cart/:id?' component={Cart} />
              <Route exact path='/' component={Home} />
            </div>
        
          </main>
    
          <footer className='footer'>
            All Rights Reserved
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
