import { Children, useState } from "react";
import { createContext,useContext, useEffect } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children, city}) =>{
    const [weatherData , setWeatherData] = useState()
    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d23f1d7e2692b7219ffab719ccca1bb7&units=metric`)
        .then(res => res.json())
        .then(data => setWeatherData(data))
    }, [city])
    return <WeatherContext.Provider value={weatherData}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)