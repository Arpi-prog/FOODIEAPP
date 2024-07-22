import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { BasketContext } from './Context';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer here
import RootNavigation from './screens/RootNavigation'; // Adjust path if necessary

export default function App() {
  return (
    <BasketContext>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </BasketContext>
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
