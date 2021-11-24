const List = ({persons, filter, handleDelete}) => {
    const regex  = new RegExp(filter, 'i')
    const filtered = persons.filter(person => person.name.match(regex))
    return (<>
        <h1>Numbers</h1>
        <ul>
            {filtered.map(person => 
            <li key={person.id}>{person.name} {person.number}<button onClick={() => {
                if(window.confirm(`Delete ${person.name}?`))
                    handleDelete(person.id)
            }}>Delete</button></li>
            )}
        </ul>
        </>)
}

export default List