import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground source={''} style={styles.backgroundImage}>
    <View style={styles.container}>
      {/* Your page content here */}
      <Text style={styles.text}>Welcome to Vamos</Text>
      {/* Other components */}
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can set 'cover' or 'contain' based on your design preference.
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set text color for readability on the background
  },
});

export default HomeScreen;