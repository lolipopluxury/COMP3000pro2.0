import React, { useEffect, useState } from 'react';
import { AsyncStorage } from '@react-native-community/async-storage';
import { ScrollView, StyleSheet,Button, Text, View, ImageBackground } from 'react-native';
import { Provider } from 'mobx-react';
import { configure } from "mobx"

import Index from './pages/Index';
import chartStore from './store/chartStore';
import deviceStore from './store/deviceStore';
import fhirStore from './store/fhirStore';

const storeSet = {
  chartStore,
  deviceStore,
  fhirStore
}

configure({
  enforceActions: "never",
})


export default class App extends React.Component {  
  
  render(){  
    return (
      <Provider store={storeSet}>
        <Index/>  
      </Provider>
    );
  }  
}