import React, {useState, useEffect} from 'react'
import Input from './Input'
import List from './List'
import Filter from './Filter'
import personService from './services/persons'

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(persons.find(elem => elem.name === newName) !== undefined){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newPhone}
        personService.updateNumber(person.id, changedPerson)
          .then(resp => {
            console.log(resp)
            setPersons(persons.map(person => person.name === newName ? resp : person))
          })
      }
    }
    else {
      const persInfo = {
        name: newName,
        number: newPhone
      }
      personService.addNew(persInfo).then(resp => {
          setPersons(persons.concat(resp))
          setNewName('')
          setNewPhone('')
        }).catch(error => console.log(error))
      }
  }

  const handleDelete = id => {
    personService.deletePerson(id).then(resp => setPersons(persons.filter(person => person.id !== id)))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <Input name={newName} setNewName={setNewName} handleSubmit={handleSubmit}
              phone={newPhone} setNewPhone={setNewPhone}/>
      <List persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App