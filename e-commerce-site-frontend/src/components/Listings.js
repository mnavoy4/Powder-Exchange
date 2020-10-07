import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListing } from '../actions/listingActions';

export default function Listings(props) {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [img_url, setImg_url] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const listingSave = useSelector(state => state.listingSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = listingSave;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveListing({ name, category, img_url, price, brand, condition, description }));
    props.history.push('/');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <ul className='form-ul'>
          <li><h3>New Listing</h3></li>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
          </li>
          <li>
            <label htmlFor='name'>Listing Name</label>
            <input 
              name='name'
              id='name'
              type='text'
              onChange={(event) => setName(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='category'>Category</label>
            <input
              name='category'
              id='category'
              type='type'
              onChange={(event) => setCategory(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='img_url'>Image URL</label>
            <input
              name='img_url'
              id='img_url'
              type='text'
              onChange={(event) => setImg_url(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='price'>Price</label>
            <input
              name='price'
              id='price'
              type='number'
              onChange={(event) => setPrice(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='brand'>Brand</label>
            <input
              name='brand'
              id='brand'
              type='text'
              onChange={(event) => setBrand(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='condition'>Condition</label>
            <input
              name='condition'
              id='condition'
              type='text'
              onChange={(event) => setCondition(event.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              onChange={(event) => setDescription(event.target.value)}>
            </textarea>
          </li>
          <li>
            <button type='submit' className='checkout-button'>Create Listing</button>
          </li>
        </ul>
      </form>
    </div>
  )
}