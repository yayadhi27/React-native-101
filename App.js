import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>React Native 101</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0',
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: '#964B00',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

