import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Link  } from '@react-navigation/native';

import { Button, WhiteSpace, WingBlank, Flex, Icon, SearchBar, Progress } from '@ant-design/react-native';

export default class Login extends React.Component{   

  render(){
    return(
      <ScrollView 
      style={styles.scrollView}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
    <WhiteSpace size="xl" />  
    <Text style={styles.upperTitle}>Login</Text>
    <WhiteSpace size="xl" />  
    <Button type="primary"><Link to="/Index">Go to Jane's profile</Link></Button>

    <Link to="/Index">Go to Jane's profile</Link>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor:'#86BD0F',    
    flex: 1
  },
  upperTitle:{
    color:'white',
    fontSize:42,     
    alignSelf:'center'
  },

})