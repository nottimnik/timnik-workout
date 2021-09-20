import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

import Picture from './assets/timnikf.png'

export default function App() {
  return (
    <SafeAreaView style={styles.body}>

      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.titleText}>Timnik's <Text style={{color: "#9f4da3"}}>Workout </Text></Text>
        <Image style={styles.image} source={require('./assets/timnikf.png')} />
      </View>

      {/* Monday Workout Title */}
      <View style={styles.title}>
        <Text style={styles.secondaryTitleText}>Monday</Text>
      </View>

      {/* Monday Workout */}
      <View style={styles.workout}>
        <Text style={styles.text}>• 15 min Jumping Ropes</Text>
        <Text style={styles.text}>• 20 Explosive Pushups</Text>
        <Text style={styles.text}>• 40 Explosive Squats</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#111111',
    color: "white"
  },
  workout: {
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: "15%"
  },
  secondaryTitleText: {
    color: '#02a3ed',
    fontFamily: "monospace",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    marginBottom: "5%"
  },
  text: {
    color: '#fff',
    fontFamily: "monospace",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14
  },
  titleText: {
    color: '#fff',
    fontFamily: "monospace",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 23
  },
});
