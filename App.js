import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';


import { Button, WhiteSpace, WingBlank, Icon, SearchBar, TabBar } from '@ant-design/react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
        selectedTab: 'home',
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
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer> 
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

