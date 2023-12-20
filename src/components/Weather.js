import React, { useEffect, useState } from 'react'

function Weather({index, data, activeIndex, handleClick}) {
  
    console.log("active", activeIndex)
    const findDay = (weatherDay) =>{
        const date = new Date(weatherDay);
        const dayOfWeek = date.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[dayOfWeek];
        return dayName.slice(0,3)
    }
  return (
       <li  onClick={() =>handleClick(index)} style={{backgroundColor: index === activeIndex ? "#fafafa" : "#fff", padding:"5px",border: "1px solid #e8e8e8"}} key={index}>
            <div style={{height:"150px",width:"80px",padding:"0px 15px" ,display:"flex", flexDirection:"column", justifyContent:"space-between",textAlign:"center", color:"#999"}} >
                <span >{findDay(data.dt_txt)}</span>
                <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png `}/>
                <div style={{width:"85px", display:"flex", justifyContent:"space-between"}} >
                    <span style={{ color:"#666"}}>{data.main.temp_max}°</span>
                    <span style={{}}>{data.main.temp_min}°</span>
                </div>
            </div>
        </li>
  )
}

export default Weather
