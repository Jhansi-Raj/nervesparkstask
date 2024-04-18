const {client} = require('../db')

const userCollection = client.db('<database-name>').collection('users')

const User = {
  async createUser(userData) {
    try {
      const result = await userCollection.insertOne(userData)
      return result.ops[0]
    } catch (err) {
      console.error('Error creating user:', err)
      throw err
    }
  },

  async getUserById(userId) {
    try {
      const user = await userCollection.findOne({_id: userId})
      return user
    } catch (err) {
      console.error('Error getting user by ID:', err)
      throw err
    }
  },
}

module.exports = User
