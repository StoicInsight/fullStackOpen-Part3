const mongoose = require('mongoose')

const url = `mongodb+srv://pierre:wildones@phonebook.lo9oyjk.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  important: Boolean
})

const Contact = mongoose.model('Contacts', contactSchema)

const contact = new Contact({
  name: 'Kobe',
  phone: 32444344,
  important: true
})

contact.save().then(res => {
  console.log('Note saved')
  mongoose.connection.close()
})