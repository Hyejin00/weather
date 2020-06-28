import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Snow: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Clouds: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Clear: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Fog: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Smoke: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Tornado: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"]
  }
}

export default function Weather({temp, condition}){
  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient || ['#2193b0','#6dd5ed']}
      style={styles.container}
    >
      <StatusBar style="light"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition]?.iconName || "weather-cloudy"} size={100} color="white" />
        <Text style={styles.temp}>{ temp }º</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text></Text>
        <Text></Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Clouds","Clear","Dust","Fog","Sand","Dust","Haze","Squall","Smoke","Ash","Tornado","Mist"]).isRequired
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  halfContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  temp:{
    fontSize: 38,
    color: 'white'
  }
})