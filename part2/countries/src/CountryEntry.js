const CountryEntry = ({country, onClick}) => {
    return (
      <li>
      <p>{country.name.common}</p>
      <button onClick={onClick}>Show</button>
      </li>
    )
}

export default CountryEntry