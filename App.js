import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MealProvider } from './src/context/Context';

export default function App() {
  return (
    <MealProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </MealProvider>
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
