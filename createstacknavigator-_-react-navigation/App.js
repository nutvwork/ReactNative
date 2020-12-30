import * as React from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />

      <Button
        title="Go to Settings-B"
        onPress={() => navigation.navigate('ScreenB')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ScreenB({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            title: 'หน้าหลัก',
            headerTitleAlign:'left',

            headerBackground: () => (
              <BlurView
                tint="light"
                intensity={100}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTransparent: true,
            title: 'หน้าหลัก',
            headerShown: false,
            headerBackground: () => (
              <BlurView
                tint="light"
                intensity={100}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Setings',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: 'blue',
          }}
        />

        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
