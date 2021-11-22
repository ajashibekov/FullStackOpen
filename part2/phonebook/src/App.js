import React, {useState, useEffect} from 'react'
import Input from './Input'
import List from './List'
import Filter from './Filter'
import axios from 'axios'

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <Input name={newName} setNewName={setNewName} personsArr={persons} setPersonsArr={setPersons} 
              phone={newPhone} setNewPhone={setNewPhone}/>
      <List persons={persons} filter={filter}/>
    </div>
  )
}

export default App