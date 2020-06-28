import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const API_KEY = "fe72b1e43e617700ae6bc6d19556042e";

export default function App() {


  const [isLoading, setIsLoading] = useState(true);
  getWeather = async()=>{
    
  }
  getLocation = async()=>{
    try {
      const res = await Location.requestPermissionsAsync();
      const { coords:{latitude,longitude} } = await Location.getCurrentPositionAsync({});
      console.log(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Can't find you.", "Set location permissions");
    }
  }

  useEffect(() => {
    getLocation();
  });

  return (
    isLoading?<Loading />:null
  );
}

