import express from 'express';
import data from './data';

const app = express();

app.get('/listings', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data.listings);
});

app.get('/listings/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const listingId = req.params.id;
  const listing = data.listings.find(listing => listing.id == listingId);
  if (listing) {
    res.send(listing);
  } else {
    res.status(404).send({msg: "Listing not found"})
  }
});

app.listen(5000, () => {console.log('listening on port 5000')})