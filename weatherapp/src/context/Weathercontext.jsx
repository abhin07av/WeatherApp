import React from "react";
import { createContext,useState,useContext } from "react";
import { getcitydata } from "../api/getapi";

const Weathercontext=createContext(null);
export const useWeather= () =>{
    return useContext(Weathercontext);
}
export const Weatherprovider=(props)=>{
    const [data,setdata]=useState(null);
    const [searchcity, setsearchcity]=useState("");
    
    const fetchdata= async () =>{
        const response = await getcitydata(searchcity);
        setdata(response);
    }
    return(
        <Weathercontext.Provider value={{data,fetchdata,searchcity,setsearchcity,setdata}}>{props.children}</Weathercontext.Provider>
    )
}
