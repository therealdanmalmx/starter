const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomAPIError('Username and password required', 400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({username, password}, process.env.JWT_SECRET, {expiresIn:"30d"})

    res.status(200).json({msg: 'You are logged in:', secret: `Bearer ${token}`})
}

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: `Lucky number ${luckyNumber}`});
}

module.exports = {
    login,
    dashboard
}