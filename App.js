import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Weather from './components/Weather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "fe72b1e43e617700ae6bc6d19556042e";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("Clouds");
  const [localName, setLocalName] = useState();

  getWeather = async(lat, lon)=>{
    const { data:{
      main: {temp},
      weather,
      name
    } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    setIsLoading(false);
    setTemp(temp);
    setCondition(weather[0].main);
    setLocalName(name);
  }
  getLocation = async()=>{
    try {
      const res = await Location.requestPermissionsAsync();
      const { coords:{latitude,longitude} } = await Location.getCurrentPositionAsync({});
      console.log(latitude, longitude);
      getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", "Set location permissions");
    }
  }

  useEffect(() => {
    getLocation();
  });

  return (
    isLoading?<Loading />:<Weather temp={Math.round(temp)} condition = { condition } getLocation = { getLocation } local = {localName}/>
  );
}

