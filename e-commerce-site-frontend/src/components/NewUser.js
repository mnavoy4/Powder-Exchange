import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeNewUser } from '../actions/userActions';


export default function NewUser(props) {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const newUser = useSelector(state => state.newUser);
  const { loading, newUserInfo, error } = newUser
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(makeNewUser(firstName, lastName, email, password));
  };

  useEffect(() => {
    if(newUserInfo){
      props.history.push('/')
    }
    return () => {
      //
    };
  }, [newUserInfo]);

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <ul className='form-ul'>
          <li><h3>Create Account</h3></li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor='firstName'>First Name</label>
            <input 
              name='firstName'
              id='firstName'
              type='text'
              onChange={(event) => setFirstName(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='lastName'>Last Name</label>
            <input 
              name='lastName'
              id='lastName'
              type='text'
              onChange={(event) => setLastName(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input 
              name='email'
              id='email'
              type='email'
              onChange={(event) => setEmail(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='newPassword'>Password</label>
            <input
              name='newPassword'
              id='newPassword'
              type='password'
              onChange={(event) => setPassword(event.target.value)}>
            </input>
          </li>
          <li>
            <button type='submit' className='checkout-button'>Create Account</button>
          </li>
          <li>Already have an account? <Link to='/signin'>Sign In</Link></li>
        </ul>
      </form>
    </div>
  )
}
