import express from 'express';
import data from './data';

const app = express();

app.get('/listings', (req, res) => {
  res.send(data.listings);
});

app.listen(5000, () => {console.log('listening on port 5000')})