import CountryInfo from './CountryInfo'
import CountryEntry from './CountryEntry'

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

export default CountryList