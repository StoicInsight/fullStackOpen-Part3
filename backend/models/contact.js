require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)
  .then(res => console.log('Conntected to mongodb'))
  .catch(err => console.log('Error connecting', err.message))

const contactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  important: Boolean
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contacts', contactSchema)