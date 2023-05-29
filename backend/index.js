require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3002

const contacts = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const num = contacts.length

app.get('/', (req, res) => {
  res.send('Hello from express')
})

// Fetch all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts)
})

// Post contact
app.post('/contacts', (req, res) => {
  const max = Math.max(contacts.map(contact => contact.id)) 
  const contact = {
    id: contacts.length += 1,
    name: req.body.name,
    number: req.body.number
  }

  console.log("response", req)
  //  contacts.push(contact)
  res.json(contact)
  
})

// Fetch contact info
app.get('/contacts/info', (req, res) => {
  const date = new Date()
  res.send(`<h1>There are ${num} contacts <br/> ${date} <h1/>`)
})

// Delete contact 
app.delete('/contacts/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log(id)
  const contact = contacts.filter(note => note.id !== id)
  console.log(contact)

  contact 
    ? res.json(contact)
    : res.status(404).end()
})

// Fetch single contact
app.get('/contacts/:id', (req, res) => {
  const id = Number(req.params.id)
  const contact = contacts.find(contact => contact.id === id)
  res.json(contact)
})


app.listen(port, () => {
  console.log('Listening on' + port)
})