const List = ({persons, filter}) => {
    const regex  = new RegExp(filter, 'i')
    const filtered = persons.filter(person => person.name.match(regex))
    return (<>
        <h1>Numbers</h1>
        <ul>
            {filtered.map(person => 
            <li key={person.id}>{person.name} {person.number}</li>
            )}
        </ul>
        </>)
}

export default List