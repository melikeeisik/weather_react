import React,{useState} from 'react'
import {useWeather} from "./WeatherContext"
import Weather from './Weather';
function WeatherPage() {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const weatherData = useWeather()
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array[i]);
        }
        return result;
    };

    const groupedWeatherData = chunkArray(weatherData.list, 7);
    console.log(groupedWeatherData)

 
  return (
    <div >
        <ul style={{listStyle:"none", display:"flex", flexDirection:"row",padding:"0px",justifyContent:"center"}}>
            {
                console.log(weatherData)
            }
            
            {groupedWeatherData.map((data, index) =>
                index < 7 ? (
                    <Weather key={index}  index={index} data={data} activeIndex={activeIndex} handleClick={handleClick}/>
                ) : null
            )}
        </ul>
    </div>
  )
}

export default WeatherPage
