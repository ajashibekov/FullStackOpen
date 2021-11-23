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

export default CountryInfo