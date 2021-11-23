import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './Filter'
import CountryList from './CountryList'

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