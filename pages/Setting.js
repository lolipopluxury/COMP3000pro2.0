import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, WhiteSpace, WingBlank, Flex, Icon, SearchBar, Progress } from '@ant-design/react-native';
import RadioButton from "react-native-animated-radio-button";

import {action} from 'mobx';
import {observer, inject} from 'mobx-react'
import httpService from '../service/httpService';

notifications = (name,time,color) => {
  return(
    <View style={{width:400,height:100,backgroundColor:color,alignSelf:'center'}}>
      <View style={{width:390,height:100,backgroundColor:'white',marginLeft:10}}>
        <View style={{ height: 50 }}>
          <Flex direction="row" justify="between">          
            <Text style={{fontSize:28,color:'black',fontWeight:'bold', marginTop:10,marginLeft:15}}>{name}</Text>            
            <Text style={{fontSize:18, color:'gray',marginTop:10,marginRight:10}}>Every {time}min</Text>
          </Flex>        
        </View>
        <WhiteSpace size="xl" /> 
        <View style={{ height: 20 }}>
          <Flex direction="row" justify="between">          
            <Text style={{fontSize:18,color:'#1E90FF',marginTop:-40,marginLeft:15}}>EDIT</Text>            
            <RadioButton                
                size={9} animation={"bounceIn"} innerColor='#86BD0F' outerColor='#86BD0F'
                onPress={() => console.log("RadioButton is pressed")}
                text=''
              />
          </Flex>        
        </View>
      </View>
    </View>
  )
}

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
              <Text style={styles.upperTitle}>Notifications</Text>
            </Flex.Item>
            <Flex.Item>
              <Icon style={{alignSelf:'center'}} name='plus-circle' size={48} color='white'/>
            </Flex.Item>
          </Flex>
      </View>
      <View style={styles.lower}>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        {notifications('Pump battery',75,'#86BD0F')}
        <WhiteSpace size="xl" />
        {notifications('Sensor age',80,'#86BD0F')}
        <WhiteSpace size="xl" />
        {notifications('Pump battery age',10,'#86BD0F')}
        <WhiteSpace size="xl" />
        {notifications('Insulin reservoir age',10,'red')}
        <WhiteSpace size="xl" />
        {notifications('Status',10,'#86BD0F')}
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
    backgroundColor:'#F2F2F2', 
    height: 800,  
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  }
})