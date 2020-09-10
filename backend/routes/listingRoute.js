import express from 'express';
import Listing from '../models/listingModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const listings = await Listing.find({});
  res.send(listings)
});

router.post('/', async (req, res) => {
  const listing = new Listing({
    name: req.body.name,
    category: req.body.category,
    img_url: req.body.img_url,
    price: req.body.price,
    brand: req.body.brand,
    condition: req.body.condition,
    description: req.body.description
  });
  const newListing = await listing.save();
  if(newListing){
    return res.status(201).send({ message: 'New listing created', data: newListing})
  }
  return res.status(500).send({ message: 'Error in creating Listing'})
})

export default router