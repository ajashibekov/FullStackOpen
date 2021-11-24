const Input = ({name, setNewName, phone, setNewPhone, handleSubmit}) => {
  
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