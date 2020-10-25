import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, WhiteSpace, WingBlank, Flex, Icon, SearchBar, Progress } from '@ant-design/react-native';

import {action} from 'mobx';
import {observer, inject} from 'mobx-react'
import httpService from '../service/httpService';

@inject('store')
@observer

export default class Setting extends React.Component{ 
  constructor(props){
    super(props);   
  }

  press = async () => {
    await this.props.store.deviceStore.getdog()
   
  }

  render(){  
    return(
      <ScrollView 
      style={styles.scrollView}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <WhiteSpace size="xl" />         
      <View style={styles.upper}>
        <Flex direction="row" justify="center">
            <Flex.Item style={{flex:3}}>
              <Text style={styles.upperTitle} onPress={this.press} >Setting</Text>
            </Flex.Item>
            <Flex.Item>
              <Icon style={{alignSelf:'center'}} name='plus-circle' size={48} color='white'/>
            </Flex.Item>
          </Flex>
      </View>
      <View style={styles.lower}>
        <WhiteSpace size="xl" />
        <Text>{this.props.store.deviceStore.dog.message}</Text>
      </View>        
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor:'#86BD0F',    
    flex: 1
  },
  upper:{
    height: 150,   
    flexDirection: 'column',    
    justifyContent: 'center',
  },
  upperTitle:{
    color:'white',
    fontSize:42,     
    alignSelf:'center'
  },
  lower:{
    backgroundColor:'white', 
    height: 800,  
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  }
})