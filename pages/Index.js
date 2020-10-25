import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import Charts from './Charts';
import Device from './Device';
import Setting from './Setting';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, WhiteSpace, WingBlank, Icon, SearchBar, TabBar } from '@ant-design/react-native';

function ChartsScreen() {
  return (
    <Charts/>
  )
}

function DeviceScreen() {
  return (
    <Device/>
  );
}

function SettingsScreen() {
  return (  
    <Setting/>
  );
}

const Tab = createBottomTabNavigator();

export default class Index extends React.Component {
  constructor(){
    super()
    this.state = {   
        isReady: false,
    }
  }  

  async componentDidMount() {
    await Font.loadAsync(
        'antoutline',        
        require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );
    await Font.loadAsync(
        'antfill',        
        require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );    
    this.setState({ isReady: true });
 } 

  onButtonClick = () => {
    console.log(this.selectedTab)
  }
  render(){
    const {isReady } = this.state;
    if (!isReady) {
        return <AppLoading />;
    }
    return (
      <NavigationContainer>    
        <Tab.Navigator      
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;  
              if (route.name === 'Device') {
                iconName = focused
                  ? 'windows'
                  : 'windows';
              } else if (route.name === 'Charts') {
                iconName = focused ? 'dot-chart' : 'dot-chart';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'highlight' : 'highlight';
              }
              return <Icon name={iconName} size={36} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#86BD0F',
            inactiveTintColor: 'gray',
          }}     
        >          
          <Tab.Screen name="Device" component={DeviceScreen} />
          <Tab.Screen name="Charts" component={ChartsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer> 
    );
  }  
}
