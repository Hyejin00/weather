import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0f0c29","#302b63","#24243e"],
    title:"Thunderstorm",
    subtitle:"It rains with thunder. refrain from going out."
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#00C9FF","#92FE9D"],
    title:"Drizzle",
    subtitle:"It's drizzling. Why don't you listen to music that will be sentimental?"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00B4DB","#0083B0"],
    title:"Rain",
    subtitle:"It's raining. Prepare an umbrella."
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#2193b0","#6dd5ed"],
    title:"Snow",
    subtitle:"It's snowing. Drive safe."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#141E30","#243B55"],
    title:"Clouds",
    subtitle:"It's cloudy. Put on sunscreen before going out."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#83a4d4","#b6fbff"],
    title:"Clear",
    subtitle:"It's clear. Have a nice day."
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#a2ab58","#636363"],
    title:"Dust",
    subtitle:"It's very dusty. Don't go out."
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5","#536976","#292E49"],
    title:"Fog",
    subtitle:"It's foggy. Drive safe!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#e9d362","#333333"],
    title:"Sand",
    subtitle:"It's yellow dust. Wear a mask and go out."
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#a2ab58","#636363"],
    title:"Haze",
    subtitle:"Fog and dust are together. Be careful of driving."
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#2C3E50","#4CA1AF"],
    title:"Squall",
    subtitle:"There's a gust of wind. Put on layers of clothes."
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#a2ab58","#636363"],
    title:"Smoke",
    subtitle:"There is a lot of dust in the air. Don't go out."
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7","#2c3e50"],
    title:"Ash",
    subtitle:"There is a lot of dust in the air. Don't go out."
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#0F2027","#203A43","#2C5364"],
    title:"Tornado",
    subtitle:"Strong gusts with thunderstorms. refrain from going out."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5","#536976","#292E49"],
    title:"Mist",
    subtitle:"It's misty. I guess we don't have to spray mist today."
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