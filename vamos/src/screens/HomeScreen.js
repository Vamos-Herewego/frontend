import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // You can use the 'navigation' prop to navigate to other screens.

  const handleButtonPress = () => {
    // Define the logic to navigate to another screen here.
    // Example: navigation.navigate('OtherScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My Stadium App</Text>
      <Text style={styles.message}>Reserve your seats for upcoming events!</Text>
      <Button title="Start Reserving" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
