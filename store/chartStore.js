import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

import { Button, WhiteSpace, Drawer, WingBlank, Flex, Icon, SearchBar, Progress } from '@ant-design/react-native';

import { observable } from 'mobx';
import httpService from '../service/httpService';
import apiConfig from '../service/apiConfig';

const chartStore = observable({
  options : '',


  token: '',
  
  async getMeta() {
    const result = await httpService.get({
      url:`${apiConfig.fhirUrl}/metadata`
    }).then((res) => {  
      this.authorize = res.rest[0].security.extension[0].extension[0].valueUri
      this.token = res.rest[0].security.extension[0].extension[1].valueUri  
    }) 
  }
})

export default chartStore