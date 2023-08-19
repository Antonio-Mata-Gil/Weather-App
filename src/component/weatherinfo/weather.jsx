import {  useContext, useEffect, useState } from "react";
import Searcher from "../searcher/searcher";
import Card from "../card/card";
import { ProvinceContext } from "../context/provinceContext";


const Weather = () => {
  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([]);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const { province } = useContext(ProvinceContext)
  const baseurlWeather = "https://api.openweathermap.org/data/2.5/weather?"
  const baseurlForecast = "https://api.openweathermap.org/data/2.5/forecast?"
  const apikey = "appid=b6ff6d099d89f6e1174590bafb7aea19";
  const lenguage = "&lang=ES";
  const city = "&q="

  useEffect(() => {
    getLocation(province);
  }, [province]);

  const getLocation =  async (loc) => {
    setLocation(true);
    setLocation(loc );
    const urlWeather = baseurlWeather + apikey + city + loc + lenguage
    const urlForecast = baseurlForecast + apikey + city + loc + lenguage
    const getData = async ()=>{
      const dataApi = await fetch(`${urlWeather}` )
      const dataJson = await dataApi.json();
      console.log(dataJson);
      console.log(dataApi.status);
      if (dataJson && dataJson.weather && dataJson.weather.length > 0) {
        setWeather(dataJson);
      } else {
        if (dataApi.status === 400){
          getLocation(province)
        }
      }
      
  }
  getData()
  const getForecast = async ()=>{
    const dataApi = await fetch(`${urlForecast}`)
    const dataJson = await dataApi.json();
   
    if (dataJson && dataJson.list && dataJson.list.length > 0) {
        setForecast(dataJson.list);
        setShow(true);
      } else {
        setForecast([]);
        setShow(false);
      }
   
}
getForecast()
  }
  return (
    <div>
      <Searcher Location = {getLocation} />
      <Card 
        card={weather}
        showData = {show}
        cardforecast= {forecast}
        loc={location}
      />
    </div>
  )
}

export default Weather
