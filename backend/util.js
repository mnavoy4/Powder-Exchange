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
  });
};

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if(token){
    const slicedToken = token.slice(7, token.length);
    jwt.verify(slicedToken, config.JWT_SECRET, (error, decode) => {
      if(error){
        return res.status(401).send({ message: 'Invalid Token' })
      }
      req.user = token;
      next();
      return
    })
  }
  return res.status(401).send({ message: 'No Token'})
}

export { getToken, isAuthenticated }