/**
 * Authentication middleware module.
 * @module middleware/authentication
 */
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

/**
 * Express middleware that verifies the JWT token from the Authorization header
 * and attaches the authenticated user to the request object.
 * auth is short for authentication, authenticate, authorization, authorize,
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const verifySecret = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: verifySecret._id, 'loginTokens.token': token });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (_error) {
        res.status(401).send({ error: 'Did not pass authentication.' });
    }
};

export default auth;
