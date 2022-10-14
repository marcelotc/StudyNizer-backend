import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { authConfig } from '../../config/auth.js';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' })
    }

    const [, token] = authHeader.split(' ');
    console.log('token', token)
    console.log('authConfig.secret', authConfig.secret)

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }

};