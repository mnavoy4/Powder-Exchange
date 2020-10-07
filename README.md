# Powder Exchange
___
A community e-Commerce site for buying and selling used Ski/Snowboard equipment including clothing and accessories.

Alt-H Guide
___
  1.  Basic Info
  2.  Demo
  3.  Supporting Technologies
  4.  Install and Setup
  5.  Features
  6.  Status
  7.  Contact
  8.  License

### 1. Basic Info
___
The Powder Exchange is a community based e-Commerce site dedicated to the recycling of old Ski/Snowboarding gear. Users can create an account, browse listings, and purchase used gear. 

### 2. Demo
___
youtube link

### 3.  Supporting Technologies
___

- NodeJS
- ReactJS
- Redux
- MongoDB

### 4.  Install and Setup
___
To run The Powder Exchange, clone it from the GitHub repository and install locally.

Run commands in backend:
```
npm install
npm start

```
Run commands in frontend:
```
npm install
npm start

```

### 5. Features
___

  - Create new User profile
  - Browse all listings
  - Filter lsitings based on category
  - Purchase equipment

  ___
  ``` 
    const signIn = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post('/users/signin', { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch(error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }
  ```
    function listingDetailsReducer(state={listing: {}}, action) {
      switch (action.type) {
    case LISTING_DETAILS_REQUEST:
      return { loading: true };
    case LISTING_DETAILS_SUCCESS: 
      return { loading: false, listing: action.payload };
    case LISTING_DETAILS_FAIL: 
      return { loading: false, error: action.payload };
    default: 
      return state;
    }
  }
  ```
  ```
    const addToCart = (listingId) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${listingsUrl}/${listingId}`);
      dispatch({type: ADD_TO_CART, payload: {
        id: data.id,
        name: data.name,
        category: data.category,
        img_url: data.img_url,
        price: data.price,
        brand: data.brand,
        condition: data.condition,
        description: data.description
      }})
      const {cart:{cartItems}} = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
    }
    catch(error) {
      alert(error)
    }
  }
  ```
  ___

  ###  6.  Status
___

  Current status:  Functional MVP completed
  
  To-do's:

  - [x] Create Listings
  - [x] Render Listings
  - [x] Sign In
  - [x] Create User
  - [x] Checkout Feature
  - [ ] Search Listings 
  


  ### 7.  Contact
  ___
  Powder Exchange was created by [Michael Navoy](https://www.linkedin.com/in/michael-navoy/).
  
  ### 8. Licence
  ___
  [Click here to view](insert license)