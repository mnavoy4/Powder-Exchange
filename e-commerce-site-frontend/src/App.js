import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import Cart from './components/Cart'
import SignIn from './components/SignIn';
import { useSelector } from 'react-redux';
import NewUser from './components/NewUser';

export default function App() {

  const userSignIn = useSelector(state => state.userSignIn);
  const { userInfo } = userSignIn;

  const openSideBar = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeSideBar = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }

    return (
      <BrowserRouter>
        <div className='grid-container'>
          <header className='header'>
            <div className='brand'>
              <button onClick={openSideBar}>
                &#9776;
              </button>
              <Link to="/" >Amazona</Link> 
            </div>
            <div className='header-links'>
              <a href='cart'>Cart</a>
              {
                userInfo ? <Link to='/profile'>{userInfo.firstName}</Link> : <Link to='/signin'>Sign in</Link>
              }
            </div>
          </header>
            <aside className={'sidebar'}>
              <h3>Shopping Categories</h3>
              <button className='sidebar-close-button' onClick={closeSideBar}>x</button>
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
              <Route path='/newuser' component={NewUser} />
            </div>
        
          </main>
    
          <footer className='footer'>
            All Rights Reserved
          </footer>
        </div>
      </BrowserRouter>
    );
  }
