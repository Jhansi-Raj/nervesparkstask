const {MongoClient} = require('mongodb')

const uri =
  'mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function connectDB() {
  try {
    await client.connect()
    console.log('Connected to MongoDB Atlas')
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err)
  }
}

module.exports = {connectDB, client}
