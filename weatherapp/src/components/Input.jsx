import React from "react";
import { useWeather } from "../context/Weathercontext";
import { getcitydata } from "../api/getapi";

const Input=()=>{
    const weather=useWeather();
    console.log(weather);
    return(
        <input className="inputfield"
        placeholder= "Search here"
        value={weather.searchcity} 
        onChange={(e)=> weather.setsearchcity(e.target.value)}
        />
    )
}

export default Input;