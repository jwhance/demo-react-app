import { useEffect, useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import SimpleText from './SimpleText';
import FetchTime from './apis/FetchTime';
import FetchWeather from './apis/FetchWeather';
import TimeWidget from './components/TimeWidget';
import WeatherWidget from './components/WeatherWidget';

const timeApiUrl = "http://worldtimeapi.org/api/timezone/America/Indiana/Indianapolis";
const weatherApiUrl = "https://api.weather.gov/gridpoints/IND/61,81/forecast";

function App() {

  const [inputBoxState, setInputBoxState] = useState('');
  const [timeData, setTimeData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [timerTick, setTimerTick] = useState(0);
  const [fiveMinuteTick, setFiveMinuteTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
      setTimerTick(timerTick => timerTick + 1);
      if ((timerTick % 60) === 0) {
        setFiveMinuteTick(fiveMinuteTick => fiveMinuteTick + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    //console.log('Updating time');
    FetchTime(timeApiUrl)
      .then(data => setTimeData(data))
      .catch(error => {
        console.error('Error getting time data:', error);
        setTimeData(null);
      })
  }, [timerTick]);

  useEffect(() => {
    console.log('Updating weather');
    FetchWeather(weatherApiUrl)
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error('Error getting weather data:', error);
        setWeatherData(null);
      })
  }, [fiveMinuteTick]);

  return (
    <div className="App">
      <SimpleText displayText={timerTick} />
      <TimeWidget currentTime={timeData ? timeData.datetime : ''} dataTestid='time-widget' />
      <WeatherWidget currentWeather={weatherData ? weatherData.properties.periods[0] : ''} />
      {/* <SimpleText displayText={JSON.stringify(timeData, null, 3)} />
      <SimpleText displayText={JSON.stringify(weatherData, null, 3)} /> */}
      <SimpleText displayText={inputBoxState} />
      <br />
      <InputBox type='text' value={inputBoxState} id='inputbox' label='My Label' name="Enter Text Here" onChange={(e) => setInputBoxState(e.target.value)} />
    </div>
  );
}

export default App;
