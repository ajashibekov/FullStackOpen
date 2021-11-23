const Weather = ({weather, city}) => {
    if(Object.keys(weather).length === 0) return <></>
    if(weather.current === undefined) return <></>
    return (
        <>
        <h2>Weather in {city}</h2>
        <p>Temperature: {weather.current.temperature} Celsius</p>
        <img src={weather.current.weather_icons[0]} alt='weather'></img>
        <p>Wind: {weather.current.wind_speed} in {weather.current.wind_dir} direction</p>
        </>
    )
}

export default Weather