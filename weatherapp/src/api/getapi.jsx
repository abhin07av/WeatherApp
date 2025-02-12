import React from "react";

const baseurl="https://api.weatherapi.com/v1/current.json?key=1ff0ba5286e0409188541859250102";

export const getcitydata=async (city)=>{
    const response=await fetch (`${baseurl}&q=${city}&aqi=yes`);
    return await response.json();
}

