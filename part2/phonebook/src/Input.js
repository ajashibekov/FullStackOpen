const Input = ({name, setNewName, personsArr, setPersonsArr, phone, setNewPhone}) => {

    const handleSubmit = (event) => {
      event.preventDefault()
      if(personsArr.find(elem => elem.name === name) !== undefined)
        alert(`${name} has been added previously!`)
      else setPersonsArr([...personsArr, {name: name, number: phone, id: personsArr.length + 1}])
      name=''
      phone=''
    }
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const handlePhoneChange = (event) => {
      setNewPhone(event.target.value)
    }
  
    return (
        <>
        <h1>Add a new entry</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={name} onChange={handleNameChange} /><br />
                <label>Number:</label>
                <input value={phone} onChange={handlePhoneChange} /><br />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default Input