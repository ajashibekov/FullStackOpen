import React, {useState, useEffect} from 'react'
import Input from './Input'
import List from './List'
import Filter from './Filter'
import Notification from './Notification'
import personService from './services/persons'

const NOTIF_SHOW_PERIOD = 5000

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ notif, setNotif ] = useState(null)

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
            setNotif({message: `Numer of ${newName} has been successfully changed`, color: 'green'})
            setTimeout(() => setNotif(null), NOTIF_SHOW_PERIOD)
          })
          .catch((err) => {
            setNotif({message: `Information of ${person.name} has already been deleted from the server`, color: 'red'})
            setTimeout(() => setNotif(null), NOTIF_SHOW_PERIOD)
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
          setNotif({message: `Added ${newName}`, color: 'green'})
          setNewName('')
          setNewPhone('')
          setTimeout(() => setNotif(null), NOTIF_SHOW_PERIOD)
        }).catch(error => console.log(error))
      }
  }

  const handleDelete = id => {
    personService.deletePerson(id)
      .then(resp => {
        setPersons(persons.filter(person => person.id !== id))
        setNotif({message: `Deleted ${persons.find(p => p.id=== id).name}`, color: 'green'})
        setTimeout(() => setNotif(null), NOTIF_SHOW_PERIOD)
      })
  }

  return (
    <div>
      <Notification info={notif} />
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <Input name={newName} setNewName={setNewName} handleSubmit={handleSubmit}
              phone={newPhone} setNewPhone={setNewPhone}/>
      <List persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App