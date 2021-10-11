const WeatherWidget = ({ currentWeather }) => {
    return (
        <>
            <h1>Weather for: {currentWeather.name}</h1>
            <h4>Temperature: {currentWeather.temperature}{currentWeather.temperatureUnit}</h4>
            <h4>Wind: {currentWeather.windDirection} @ {currentWeather.windSpeed}</h4>
            <h4>Short Term Forecast: {currentWeather.shortForecast}</h4>
            {/* <pre>{JSON.stringify(currentWeather, null, 3)}</pre> */}
        </>
    )
}

export default WeatherWidget;