import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({countryFilter, setCountryFilter}) => {
  const handleCountryChange = (event) => setCountryFilter(event.target.value)
  return (
    <>
    <label>Find countries:</label>
    <input value={countryFilter} onChange={handleCountryChange}></input>
    </>
  )
}

const CountryList = ({countryFilter, allCountries}) => {
  const regex = new RegExp(countryFilter, 'i')
  if(allCountries === undefined) return <></>

  const filteredCountries = allCountries.filter(country => country.name.common.match(regex))

  if(filteredCountries.length > 10) return <p>Too many matches, specify another filter</p>
  else if (filteredCountries.length === 1){
    return <CountryInfo countryInfo={filteredCountries[0]} />
  }
  else return (
    <ul>
      {filteredCountries.map(country => 
        <li key={country.name.common}>{country.name.common}</li>)}
    </ul>
  )
}

const CountryInfo = ({countryInfo}) => {
  const langKeys = Object.keys(countryInfo.languages)
  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital: {countryInfo.capital}</p>
      <p>Population: {countryInfo.population}</p>
      <p>Languages:</p>
      <ul>
        {langKeys.map(key => 
          <li key={key}>{countryInfo.languages[key]}</li>)}
      </ul>
      <img src={countryInfo.flags.png} alt="flag"></img>
    </div>
  )
}

const App = () => {
  const [countryFilter, setCountryFilter] = useState('')
  const [allCountries, setAllCountries] = useState()

  useEffect(
    () => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          setAllCountries(response.data)
        })
    }, [])

  return (
    <div>
      <Filter countryFilter={countryFilter} setCountryFilter={setCountryFilter} />
      <br />
      <CountryList countryFilter={countryFilter} allCountries={allCountries} />
    </div>
  )
}

export default App