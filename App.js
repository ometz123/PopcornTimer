import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PopcornTimer from './src/FC/FCPopcornTimer';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <PopcornTimer styles={styles} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcaf17',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  titleText: {
    justifyContent: 'center',
    marginTop: 60,
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    //fontSize: 20,
    fontWeight: "bold"
  }
});
