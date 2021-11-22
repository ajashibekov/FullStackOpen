import React, {useState} from 'react'
import Input from './Input'
import List from './List'
import Filter from './Filter'

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ filter, setFilter ] = useState('')

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