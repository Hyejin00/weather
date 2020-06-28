import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Snow: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Clouds: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Clear: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Fog: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Smoke: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Tornado: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#a2ab58","#636363"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
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
      <View style={{...styles.halfContainer,...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition]?.title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition]?.subtitle}</Text>
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
  },
  title:{
    fontSize: 44,
    color: 'white',
    fontWeight: "100"
  },
  subtitle:{
    fontSize:25,
    color: 'white',
    fontWeight: "bold"
  },
  textContainer: {
    paddingHorizontal:20,
    alignItems: "flex-start"
  }
})