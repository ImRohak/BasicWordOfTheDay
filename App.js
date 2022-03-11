import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <ImageBackground source={require("./assets/pexels-anand-dandekar-1532771.jpg")} style={styles.image}>
      <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : 
      ( 
        <>
        <Text style={styles.word}>{data["word"]}</Text>
        <Text style={styles.meaning}>{data.definitions[0].text}</Text>
        <StatusBar style="auto" />
        </>
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  word: {
    fontWeight: "bold",
    marginTop: "5%",
    fontSize: 40,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 5,
    shadowOpacity: 20
  },
  meaning: {
    marginTop: "5%",
    fontStyle: "italic",
    fontSize: 20,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 5
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});