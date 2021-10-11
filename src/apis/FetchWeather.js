const FetchWeather = async (weatherApiUrl) => {
    const weatherData = await fetch(weatherApiUrl);
    return await weatherData.json();
}

export default FetchWeather;