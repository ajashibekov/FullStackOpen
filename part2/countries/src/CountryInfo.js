import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryInfo = ({countryInfo}) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: countryInfo === undefined ? '' : countryInfo.capital[0]
        }
        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                const apiResponse = response.data
                setWeather([apiResponse])
            }).catch(error => console.log(error))
    }, [countryInfo])

    const langKeys = Object.keys(countryInfo.languages)

    if(weather.length > 0) return (
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
        <Weather weather={weather[0]} city={countryInfo.capital} />
      </div>
    )
    else return (
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

export default CountryInfo