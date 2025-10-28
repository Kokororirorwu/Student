import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Привет!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 32,
    color: '#333',
  },
});
