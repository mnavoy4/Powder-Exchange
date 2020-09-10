import express from 'express';
import User from '../models/userModel';
import getToken from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (signInUser){
    res.send({
      _id: signInUser.id,
      firstName: signInUser.firstName,
      lastName: signInUser.lastName,
      email: signInUser.email,
      token: getToken(signInUser)
    })
  } else {
    res.status(401).send({ message: 'Invalid Email or Password' })
  }
})

router.get("/createuser", async (req, res) => {
  try {
    const user = new User({
      firstName: 'Michael',
      lastName: 'Navoy',
      email: 'mnavoy4@gmail.com',
      password: '12345678'
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
})

export default router