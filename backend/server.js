import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from 'body-parser';
import listingRoute from './routes/listingRoute';
import cors from 'cors';

dotenv.config();


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use("/users", userRoute);
app.use('/listings', listingRoute);

// app.get('/listings', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(data.listings);
// });

// app.get('/listings/:id', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   const listingId = req.params.id;
//   const listing = data.listings.find(listing => listing.id == listingId);
//   if (listing) {
//     res.send(listing);
//   } else {
//     res.status(404).send({msg: "Listing not found"})
//   }
// });

app.listen(5000, () => {console.log('listening on port 5000')})