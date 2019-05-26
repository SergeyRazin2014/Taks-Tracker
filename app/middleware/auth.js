const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    
    //получение токена из заголовков
    const token = req.header('x-auth-token')

    //если нет токена
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    //проверка токена
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}