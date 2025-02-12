import React from "react";
import { useWeather } from "../context/Weathercontext";

const Card=()=>{
    const weather=useWeather();
    console.log("Card weather", weather)
    if (!weather || !weather.data){
        return <h1>Please select a location</h1>
    }
    else{
        return (
        <div>
        <img src={weather.data.current.condition.icon}/>
        <h3>{weather.data.current.condition.text}</h3>
        <h2>{weather.data.current.temp_c}</h2>
        <h3>{weather.data.location.name}, {weather.data.location.region}</h3>
        </div> 
    )
    }
}

export default Card;