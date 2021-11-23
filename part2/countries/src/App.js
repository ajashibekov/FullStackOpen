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

const CountryEntry = ({country, onClick}) => {
  return (
    <li>
    <p>{country.name.common}</p>
    <button onClick={onClick}>Show</button>
    </li>
  )
}

const CountryList = ({countryFilter, allCountries, selectedCountry, setSelectedCountry}) => {
  const regex = new RegExp(countryFilter, 'i')
  if(allCountries === undefined) return <></>

  const filteredCountries = allCountries.filter(country => country.name.common.match(regex))
  const onShowClick = (country) => {
    setSelectedCountry(country.name.common)
  }

  if(filteredCountries.length > 10) return <p>Too many matches, specify another filter</p>
  else if (filteredCountries.length === 1){
    return <CountryInfo countryInfo={filteredCountries[0]} />
  }
  else{ 
    if(selectedCountry) {
      const countryInfo = filteredCountries.filter(country => country.name.common === selectedCountry)
      return (
        <div>
          <CountryInfo countryInfo={countryInfo[0]} />
          <button onClick={() => setSelectedCountry('')}>Back</button>
        </div>
      )
    }
    else return (
      <ul>
        {filteredCountries.map(country => <CountryEntry country={country} key={country.name.common}
           onClick={() => onShowClick(country)} />)}
      </ul>
    )
  }
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
  const [selectedCountry, setSelectedCountry] = useState('')

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
      <CountryList countryFilter={countryFilter} allCountries={allCountries} 
          selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
    </div>
  )
}

export default App