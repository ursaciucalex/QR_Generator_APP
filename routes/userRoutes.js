import express from 'express'

const userRoutes = express.Router();

import registerUser from '../controller/registerUser.js';
import loginUser from '../controller/loginUser.js';
import qrcode from '../controller/qr.js';
import validateToken from '../utils/validate.Token.js';

//path
userRoutes.post('/loginUser', loginUser);
userRoutes.post('/registerUser',registerUser);
userRoutes.get('/qr',validateToken, qrcode);


export default userRoutes;