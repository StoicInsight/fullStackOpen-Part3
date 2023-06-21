import axios  from 'axios'

const URL = "http://localhost:8080/contacts"

const getNumbers = () => {
  const request = axios.get(URL)
  return request.then(response => response.data)
} 

const newNumber = newNum => {
  const request = axios.post(URL, newNum)
  return request.then(response => response.data)
}

const deleteNumber = (id, number) => {
  const phoneUrl = `${URL}/${id}`
  const request = axios.delete(phoneUrl)

  return request.then(response => response.data)
}

const updateNumber = (id, number) => {
  const phoneUrl = `${URL}/${id}`
  const request = axios.put(phoneUrl, number)
  return request.then(response => console.log(response))
}


export default {
  getNumbers, 
  newNumber,
  deleteNumber, 
  updateNumber
}