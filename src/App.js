import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers';
import NameForm from './components/NameForm';
import FilterNames from './components/Filter';
import dataServices from './services/Data'


function App() {


    const [ persons, setPersons ] = useState([])
    const [ filtered, setFiltered ] = useState('') 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ error, setError ] = useState('')

    console.log(error)

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
    
      if(!nameObject.name) {
        setError('Missing name value')
        setTimeout(() => {
          setError('')
        }, 3000)
      } else if(!nameObject.number) {
        setError('Missing number value')
        setTimeout(() => {
          setError('')
        }, 3000)
      } else {
        dataServices
          .newNumber(nameObject)
          .then(number => setPersons(persons.concat(number)))
        setNewName('')
        setNewNumber('')
      }
    }


    const deleteNumber = (id) => {
      console.log(`Number with ${id} needs to be deleted`)
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
    <div className="App bg-zinc-400 h-[100vh] flex flex-col  gap-4 items-center">
      <h1>PhoneBook</h1>
      <FilterNames
        filterChange={filterContacts}
      />
      <h4 className={error ? 'bg-red-700 font-bold text-md p-3 text-white rounded' : "bg-green-500 font-bold text-md text-white rounded p-2"}>{!error ? "Add New Name" : error }</h4>
      <NameForm 
        addName={addNewNumber} 
        trackName={(e) => setNewName(e.target.value)} 
        trackNum={(e) => setNewNumber(e.target.value)}
        nameVal={newName}
        numVal={newNumber}
      />
      <Numbers people={persons} deleteNumber={deleteNumber}/>
    </div>  
  );
}

export default App;
