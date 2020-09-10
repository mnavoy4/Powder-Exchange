import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from './actions/userActions'


export default function SignIn(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignIn = useSelector(state => state.userSignIn);
  const { loading, userInfo, error } = userSignIn
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(email, password))
  };

  useEffect(() => {
    if(userInfo){
      props.history.push('/')
    }
    return () => {
      //
    };
  }, [userInfo]);

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <ul className='form-ul'>
          <li><h3>Sign In</h3></li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
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
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              id='password'
              type='password'
              onChange={(event) => setPassword(event.target.value)}>
            </input>
          </li>
          <li>
            <button type='submit' className='checkout-button'>Sign In</button>
          </li>
          <li>New to the site?</li>
          <li><Link to='/register' className='button secondary text-center'>Create your account</Link></li>
        </ul>
      </form>
    </div>
  )
}