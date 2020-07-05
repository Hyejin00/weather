import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native';

export default function Loading(){
  return (
    <View style={styles.container}>
      <StatusBar />
      <ActivityIndicator size="large" color="#0000ff" style={styles.indicator}/>
      <Text style={styles.text}>Getting weather...</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EAF8',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal:30,
    paddingVertical:100
  },
  text: {
    color:'#2c2c2c',
    fontSize: 30,
    fontWeight: "100"
  },
  indicator:{
    paddingBottom: 190,
  }
});