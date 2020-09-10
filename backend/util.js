import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  }, config.JWT_SECRET, {
    expiresIn: '48h'
  })
}

export { getToken }