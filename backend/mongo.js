const mongoose = require('mongoose')

if(process.argv.length < 3) {
  console.log('Give password')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://pierre:${password}@phonebook.b3wjj6h.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  phoneNumber: Number,
  important: Boolean
})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
  name: 'Pierre', 
  phoneNumber: 404-271-1070,
  important: false
})

contact.save().then(res => {
  console.log('Note is saved', res)
  mongoose.connection.close()

})