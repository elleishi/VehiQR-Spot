import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Pages/LoginScreen';
import Scanner from './Pages/Security/qrCodeScanner';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



