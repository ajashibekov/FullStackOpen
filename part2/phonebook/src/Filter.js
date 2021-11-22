const Filter = ({filter, setFilter}) => {
    const handleFilterChange = (event) => setFilter(event.target.value)
    return (
        <>
        <label>Filter shown containing </label>
        <input value={filter} onChange={handleFilterChange} /><br />
        </>
    )
}

export default Filter