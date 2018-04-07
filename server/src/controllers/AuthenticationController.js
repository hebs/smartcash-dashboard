const {user} = require('../models')

module.exports = {
  async register (req, res) {
    try{
      const User = await user.create(req.body)
      res.send(User.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  }
}
