import * as React from 'react';
import { Pressable, View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Text></Text>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Vai para Home</Text>
      </Pressable>
       <Pressable
        onPress={() => navigation.navigate('Configuração')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Vai para configuração</Text>
      </Pressable>
    </View>
  );
}

function Story({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Pressable
        onPress={() => navigation.navigate('home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Button             
                style = {{backgroundColor:'red'}}
                title = "TEMA ESCURO"

                />
      </Pressable>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu';
            } else if (route.name === 'Configuração') {
              iconName = focused ? 'cog' : 'cog';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Menu" component={Conference} />
        <Tab.Screen name="Configuração" component={Story} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
