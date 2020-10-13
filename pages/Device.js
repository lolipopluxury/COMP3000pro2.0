import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, WhiteSpace, WingBlank, Flex, Icon, SearchBar, Progress } from '@ant-design/react-native';
import { color } from 'react-native-reanimated';

progressBar = (name,color,percentage) => {
  return(
      <View style={styles.progressBar}>
        <Flex>
          <Flex.Item style={{flex:4}}>
            <Text style={styles.progressTitle}>{name}</Text>
          </Flex.Item>
          <Flex.Item>
            <Text style={{color:color,fontSize:24,}}>{percentage}%</Text>
          </Flex.Item>
        </Flex>        
        <WhiteSpace size="md" />
        <View style={{justify:'center'}}>
          <Progress style={{width: 400}} 
            barStyle={{height: 10, borderColor:color,backgroundColor:color}} 
            percent={percentage} position="fixed"/>
        </View>
      </View>
    )     
};

export default class Device extends React.Component{    
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
                <Text style={styles.upperTitle}>Device Status</Text>
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
          {progressBar('Pump battery', 'red', 90)}
          <WhiteSpace size="xl" />  
          <WhiteSpace size="xl" />  
          {progressBar('Sensor age', 'green', 50)}
          <WhiteSpace size="xl" />  
          <WhiteSpace size="xl" />  
          {progressBar('Cannula age', 'yellow', 70)}
          <WhiteSpace size="xl" />  
          <WhiteSpace size="xl" />  
          {progressBar('Insulin reservior age', 'blue', 80)}      
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
  },
  progressBar:{
    marginLeft: 30
  }
  ,
  progressTitle:{
    fontWeight:'bold',
    color:'black',
    fontSize:24,
  }
})