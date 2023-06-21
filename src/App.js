import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers';
import { Modal, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NameForm from './components/NameForm';
import FilterNames from './components/Filter';
import dataServices from './services/Data'




const style = {
  position: 'absolute',
  display: 'flex',
  'flex-direction': 'column',
  "justify-content": 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const App = () => {
    const [ open, setOpen ] = useState(false)
    const [ persons, setPersons ] = useState([])
    const [ filtered, setFiltered ] = useState('') 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ error, setError ] = useState('')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
      dataServices
        .getNumbers()
        .then(data => setPersons(data))
    }, [App])

    const addNewNumber = (e) => {
      e.preventDefault()

      const nameObject = {
        name: newName,
        number: newNumber
      } 
    
      // if(!nameObject.name) {
      //   setError('Missing name value')
      //   setTimeout(() => {
      //     setError('')
      //   }, 3000)
      // } else if(!nameObject.number) {
      //   setError('Missing number value')
      //   setTimeout(() => {
      //     setError('')
      //   }, 3000)
      // } else {

        dataServices
          .newNumber(nameObject)
          .then(number => setPersons(persons.concat(number)))
        setNewName('')
        setNewNumber('')
    }
  
    const deleteNumber = (id) => {
      const url = `http://localhost:3001/phones/${id}`

      window.confirm(`Do you really want to delete ${id}`)
      axios.delete(url)
        .then(setPersons(persons.filter(person => person.id !== id)))
    }

    const filterContacts = (e) => {
      e.preventDefault()
      setFiltered(e.target.value)
      
      const newContact = persons.filter(p => p.name.includes(filtered))

      setPersons(newContact)
    }
  return (
    <section className="  bg-slate-700 flex justify-center h-[100vh] border-4 border-gray-500">
       <div className="App flex flex-col  gap-4 items-center w-[40%] border-2 border-gray-500 rounded-4xl">
        <div className="flex items-center text-white font-bold text-2xl gap-3">
          <ContactPhoneIcon/>
          <h1>PhoneBook</h1>
        </div>
        <div className='flex items-center justify-between mx-auto w-[100%]'>
          <h1 className='font-bold text-2xl text-white'>Contacts</h1>
          <button className='p-[.5rem] bg-blue-700 text-white rounded-lg' onClick={() => setOpen(!open)}>+ Add Contact</button>
        </div>
        <label className='flex items-center bg-white w-[100%] p-2 rounded-xl'>
          <SearchIcon/>
          <input placeholder='Search for contact by last name' className='w-full'/>
        </label> 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <NameForm
                addName={addNewNumber}
                trackName={(e) => setNewName(e.target.value)}
                trackNum={(e) => setNewNumber(e.target.value)}
                nameVal={newName}
                numVal={newNumber}
                closeModal={handleClose}

              />
            </Box>

        </Modal>
          
        {/* <h4 className={error ? 'bg-red-700 font-bold text-md p-3 text-white rounded' : "bg-green-500 font-bold text-md text-white rounded p-2"}>{!error ? "Add New Name" : error }</h4> */}
        {/* <NameForm
        addName={addNewNumber}
        trackName={(e) => setNewName(e.target.value)}
        trackNum={(e) => setNewNumber(e.target.value)}
        nameVal={newName}
        numVal={newNumber}
        />  */}
         {/* <Numbers people={persons} deleteNumber={deleteNumber}/> */}
      </div> 
    </section>
  )
}


export default App;




