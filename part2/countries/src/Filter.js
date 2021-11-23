const Filter = ({countryFilter, setCountryFilter}) => {
    const handleCountryChange = (event) => setCountryFilter(event.target.value)
    return (
      <>
      <label>Find countries:</label>
      <input value={countryFilter} onChange={handleCountryChange}></input>
      </>
    )
}

export default Filter