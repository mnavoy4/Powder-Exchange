import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Listing from './components/Listing';
import Cart from './components/Cart'
import SignIn from './components/SignIn';
import { useSelector } from 'react-redux';
import NewUser from './components/NewUser';
import Listings from './components/Listings';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import PlaceOrder from './components/PlaceOrder';

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
              <Link to="/" >The Powder Exchange</Link> 
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
                  <a href='/'>Skis</a>
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
                <li>
                  <a href='/'>Helmets</a>
                </li>
                <li>
                  <a href='/'>Accessories</a>
                </li>
              </ul>
              <div onClick={closeSideBar} className='link-to-new-listing'><Link to='/listings'>Create New Listing</Link></div>
            </aside>
          <main className='main'>
            <div className='content'>
              <Route path='/signin' component={SignIn} />
              <Route path='/listings' component={Listings} />
              <Route path='/listing/:id' component={Listing}/>
              <Route path='/shipping' component={Shipping} />
              <Route path='/payment' component={Payment} />
              <Route path='/placeorder' component={PlaceOrder} />
              <Route path='/cart/:id?' component={Cart} />
              <Route exact={true} path='/' component={Home} />
              <Route path='/newuser' component={NewUser} />
            </div>
        
          </main>
    
          <footer className='footer'>
            All Rights Reserved - Created By Michael Navoy
          </footer>
        </div>
      </BrowserRouter>
    );
  }
