const User = require('../models/user.js')

const UserController = {
  async createUser(req, res) {
    try {
      const newUser = await User.createUser(req.body)
      res.json(newUser)
    } catch (err) {
      res.status(500).json({error: 'Could not create user'})
    }
  },

  async getUserById(req, res) {
    try {
      const userId = req.params.id
      const user = await User.getUserById(userId)
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({error: 'User not found'})
      }
    } catch (err) {
      res.status(500).json({error: 'Could not get user'})
    }
  },
}

module.exports = UserController
