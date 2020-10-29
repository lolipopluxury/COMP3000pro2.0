import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

import { Button, WhiteSpace, Drawer, WingBlank, Flex, Icon, Tabs, SegmentedControl, Card } from '@ant-design/react-native';

import RadioButton from "react-native-animated-radio-button";

import {observer, inject} from 'mobx-react'

import {
  LineChart,
  ProgressChart,
} from "react-native-chart-kit";

// const tabs = ;


@inject('store')
@observer

export default class Charts extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      sheet:0,
      part1Value: 0,
      pickerView:null
    }  
  }

  openDiet = async ()=>{
    await this.setState({
      sheet:1
    })    
  }
  openTraining = async () => {
    await this.setState({
      sheet:2
    })  
  }
  backToOption = async ()=>{
    await this.setState({
      sheet:0,      
    })    
  }

  pickerChange =(value) =>{
    this.setState({
      pickerView:value,
    });
  }
  

  render(){
    const tabs = [{ title: 'GLU' },{ title: 'DIET' },{ title: 'PT' }];

    const drawerTitle = (
      <View>
        <WhiteSpace size="xl" />  
          <WhiteSpace size="xl" />                
          <WingBlank size="lg">        
          <View style={{height: 100,flexDirection: 'column',justifyContent: 'center'}}>          
            <Flex direction="row" justify="center">
              <Flex.Item style={{flex:1}}>
              <Icon name='close-circle' size={42} color='#86BD0F' style={{alignSelf:'center'}} onPress={() => this.drawer.closeDrawer()}/>
              </Flex.Item>
              <Flex.Item style={{flex:3}}>
              <Text style={{marginLeft:45,alignSelf:'flex-start',color:'#86BD0F',fontSize:42}}>Adding</Text>
              </Flex.Item>
            </Flex>           
          </View>
          </WingBlank>
      </View>
    )
    
    const options = (
      <View>
        <WhiteSpace size="xl" /> 
        <View style={{height:70, backgroundColor:'white'}} >
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:3}}>
              <Text style={{fontSize:36,color:'gray',marginTop:8,marginLeft:60}} onPress={this.openDiet}>Diet</Text>
              </Flex.Item>
              <Flex.Item style={{flex:1}}>
              <Icon name='right' size={42} color='gray' style={{alignSelf:'flex-start',marginTop:10,marginLeft:30}}/>
              </Flex.Item>
            </Flex>
        </View>
        <WhiteSpace size="xl" />  
        <WhiteSpace size="xl" />  
        <View style={{height:70, backgroundColor:'white'}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:3}}>
              <Text style={{fontSize:36,color:'gray',marginTop:8,marginLeft:60}} onPress={this.openTraining}>Personal Training</Text>
              </Flex.Item>
              <Flex.Item style={{flex:1}}>
              <Icon name='right' size={42} color='gray' style={{alignSelf:'flex-start',marginTop:10,marginLeft:30}}/>
              </Flex.Item>
            </Flex>      
        </View>
      </View>
    )
    
    const diet = (
      <View>
        <Text style={{fontSize:36,color:'gray',alignSelf:"center"}}>Diet</Text>
        <WhiteSpace size="xl" /> 
        <View style={{height:70, backgroundColor:'white'}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:3}}>
              <TextInput style={{fontSize:25,color:'gray',marginTop:12,marginLeft:60}} placeholder='Search...'/>
              </Flex.Item>
              <Flex.Item style={{flex:1}}>
              <Icon name='search' size={42} color='gray' style={{alignSelf:'flex-start',marginTop:14,marginLeft:30}}/>
              </Flex.Item>
            </Flex>
        </View>
        <WhiteSpace size="xl" /> 
        <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:28,color:'gray',marginTop:15,marginLeft:65}}>Apple</Text>
              </Flex.Item>
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:60}}>50% carbs</Text>
              </Flex.Item>
            </Flex>
        </View>
        <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:28,color:'gray',marginTop:15,marginLeft:65}}>Pizza</Text>
              </Flex.Item>
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:60}}>47% carbs</Text>
              </Flex.Item>
            </Flex>
        </View>
        <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:28,color:'gray',marginTop:15,marginLeft:65}}>Egg</Text>
              </Flex.Item>
              <Flex.Item style={{flex:2}}>
              <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:60}}>77% carbs</Text>
              </Flex.Item>
            </Flex>
        </View>
        <WhiteSpace size="xl" /> 
        <Flex direction="row" justify="center">
          <Flex.Item style={{flex:2}}> 
            <Icon style={{alignSelf:'center',marginLeft:160}} name='plus-circle' size={24} color='gray'/>
          </Flex.Item>
          <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:18,color:'gray',marginTop:0,marginLeft:-25}}>Other diet</Text>
          </Flex.Item>          
        </Flex>
        <WhiteSpace size="xl" /> 
        <WhiteSpace size="xl" /> 
        <WhiteSpace size="xl" /> 
        <Flex direction="row" justify="center">
          <Flex.Item style={{flex:2}}> 
            <Icon style={{alignSelf:'center',marginLeft:180}} name='left' size={24} color='gray'/>
          </Flex.Item>
          <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:18,color:'gray',marginTop:0,marginLeft:-10}} onPress={this.backToOption}>Back</Text>
          </Flex.Item>          
        </Flex>
      </View>
    )

    const training = (
      <View>
      <Text style={{fontSize:36,color:'gray',alignSelf:"center"}}>Personal Training</Text>      
      <WhiteSpace size="xl" /> 
      <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
        <Flex direction="row" justify="center">
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:23,color:'gray',marginTop:15,marginLeft:45}}>Running(10min)</Text>
            </Flex.Item>
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:70}}>98 cal</Text>
            </Flex.Item>
          </Flex>
      </View>
      <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
        <Flex direction="row" justify="center">
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:23,color:'gray',marginTop:15,marginLeft:45}}>Swimming(10min)</Text>
            </Flex.Item>
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:70}}>44 cal</Text>
            </Flex.Item>
          </Flex>
      </View>
      <View style={{height:70, backgroundColor:'white', marginBottom:2}}>
        <Flex direction="row" justify="center">
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:23,color:'gray',marginTop:15,marginLeft:45}}>Walking(10min)</Text>
            </Flex.Item>
            <Flex.Item style={{flex:2}}>
            <Text style={{fontSize:24,color:'gray',marginTop:18,marginLeft:70}}>18 cal</Text>
            </Flex.Item>
          </Flex>
      </View>
      <WhiteSpace size="xl" /> 
      <Flex direction="row" justify="center">
        <Flex.Item style={{flex:2}}> 
          <Icon style={{alignSelf:'center',marginLeft:140}} name='plus-circle' size={24} color='gray'/>
        </Flex.Item>
        <Flex.Item style={{flex:2}}>
          <Text style={{fontSize:18,color:'gray',marginTop:0,marginLeft:-35}}>Other training</Text>
        </Flex.Item>          
      </Flex>
      <WhiteSpace size="xl" /> 
      <WhiteSpace size="xl" /> 
      <WhiteSpace size="xl" /> 
      <Flex direction="row" justify="center">
        <Flex.Item style={{flex:2}}> 
          <Icon style={{alignSelf:'center',marginLeft:180}} name='left' size={24} color='gray'/>
        </Flex.Item>
        <Flex.Item style={{flex:2}}>
          <Text style={{fontSize:18,color:'gray',marginTop:0,marginLeft:-10}} onPress={this.backToOption}>Back</Text>
        </Flex.Item>          
      </Flex>
    </View>
    )
 
    const _sidebar = [(
      <ScrollView >
        {drawerTitle}
        {options}       
      </ScrollView>
    ),
    (
      <ScrollView >
        {drawerTitle}
        {diet}       
      </ScrollView>
    ),
    (
      <ScrollView >
        {drawerTitle}
        {training}       
      </ScrollView>
    ),
    ]; 
    
    const sidebar = _sidebar[this.state.sheet];     

    const tabPage1 = (
      <View>
        <WhiteSpace size="xl" />                 
        <Text style={{fontSize:48, fontWeight:'bold', marginLeft:70}}>11.1</Text>
        <WhiteSpace size="xl" />
        <View style={{height:20, marginBottom:10}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:3}}>
              <Text style={{fontSize:16,color:'black',marginTop:-35,marginLeft:330}}>Diet</Text>
              </Flex.Item>
              <Flex.Item style={{flex:1}}>
              <RadioButton                
                size={12} animation={"bounceIn"} innerColor='#86BD0F' outerColor='#86BD0F'
                onPress={() => console.log("RadioButton is pressed")}
                text=''
              />
              </Flex.Item>
            </Flex>
        </View>
        <View style={{height:20, marginBottom:30}}>
          <Flex direction="row" justify="center">
              <Flex.Item style={{flex:3}}>
              <Text style={{fontSize:16,color:'black',marginTop:-35,marginLeft:235}}>Personal Training</Text>
              </Flex.Item>
              <Flex.Item style={{flex:1}}>
              <RadioButton                
                size={12} isSelected animation={"bounceIn"} innerColor='#86BD0F' outerColor='#86BD0F'
                onPress={() => console.log("RadioButton is pressed")}
                text=''
              />
              </Flex.Item>
            </Flex>
        </View>
        <SegmentedControl
          values={['12h', '24h', '48h']}
          tintColor={'#86BD0F'}
          style={{ height: 20, width: 120, marginLeft:310, marginBottom:50}}
        />
        <View>          
          <LineChart
            data={{
              labels: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00","0:00",],
              datasets: [{data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, 
                          Math.random() * 100, Math.random() * 100, Math.random() * 100,Math.random() * 100]}]}}
            width={440}  height={280}        
            yAxisInterval={1} 
            chartConfig={{
              backgroundColor: "#86BD0F",
              backgroundGradientFrom: "#86BD0F",
              backgroundGradientTo: "#61e926",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "7",
                strokeWidth: "2",
                stroke: "#86BD0F"
              }
            }}
            bezier
            style={{
              alignSelf:'center',
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>
    )

    const progressChartData = {
      labels: ["intake", "Carbs"], 
      data: [0.3, 0.4]
    };    

    const tabPage2 = (
      <View>
        <View>
          <WhiteSpace size="xl" />  
          <Flex direction="row" justify="center">
            <Flex.Item style={{flex:1}}>
            <Text style={{fontSize:22,color:'gray',marginTop:0,marginLeft:50}}>Insulin</Text>
            </Flex.Item>
            <Flex.Item style={{flex:3}}>
            <Text style={{fontSize:36, fontWeight:'bold', marginLeft:10}}>1.4U</Text>
            </Flex.Item>
          </Flex>  
          <WhiteSpace size="s" />
          <Flex direction="row" justify="center">
            <Flex.Item style={{flex:1}}>
            <Text style={{fontSize:22,color:'gray',marginTop:0,marginLeft:50}}>Carbs</Text>
            </Flex.Item>
            <Flex.Item style={{flex:3}}>
            <Text style={{fontSize:36, fontWeight:'bold', marginLeft:10}}>23g</Text>
            </Flex.Item>
          </Flex>             
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <View style={{height:20, marginBottom:10}}>
            <Flex direction="row" justify="center">
                <Flex.Item style={{flex:3}}>
                <Text style={{fontSize:14,color:'black',marginTop:-32,marginLeft:270}}>Total intake</Text>
                </Flex.Item>
                <Flex.Item style={{flex:1}}>
                <RadioButton                
                  size={12} isSelected animation={"bounceIn"} innerColor='#86BD0F' outerColor='#86BD0F'
                  onPress={() => console.log("RadioButton is pressed")}
                  text=''
                />
                </Flex.Item>
              </Flex>
          </View>
          <View style={{height:20, marginBottom:30}}>
            <Flex direction="row" justify="center">
                <Flex.Item style={{flex:3}}>
                <Text style={{fontSize:14,color:'black',marginTop:-32,marginLeft:265}}>Carbohydrates</Text>
                </Flex.Item>
                <Flex.Item style={{flex:1}}>
                <RadioButton                
                  size={12} animation={"bounceIn"} innerColor='#86BD0F' outerColor='#86BD0F'
                  onPress={() => console.log("RadioButton is pressed")}
                  text=''
                />
                </Flex.Item>
              </Flex>
          </View>
          <ProgressChart
            data={progressChartData}
            width={440}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={{
              backgroundColor: "#FFFFFF", //#86BD0F
              backgroundGradientFrom: "#FFFFFF", //#86BD0F
              backgroundGradientTo: "#FFFFFF", //#61e926
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(134, 189, 15, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              },              
            }}
            hideLegend={false}
            style={{
              alignSelf:'center',
              marginVertical: 8,
              borderRadius: 16
            }}
          />  
        </View>
      </View>
    )

    const tabPage3 = (
      <View>
        <WhiteSpace size="xl" />                 
        <Text style={{fontSize:32, color:'gray', alignSelf:'center'}}>2020-10-07</Text>
        <WhiteSpace size="xl" />
        <ProgressChart
            data={progressChartData}
            width={440}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={{
              backgroundColor: "#F2F2F2", //#86BD0F
              backgroundGradientFrom: "#F2F2F2", //#86BD0F
              backgroundGradientTo: "#F2F2F2", //#61e926
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(134, 189, 15, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              },              
            }}
            hideLegend={false}
            style={{
              alignSelf:'center',
              marginVertical: 8,
              borderRadius: 16
            }}
          /> 
          <WingBlank size="lg">
          <Card>
            <Card.Header
              title="This week"              
              extra="97min"          
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Flex direction="row" justify="center">
                  <Flex.Item style={{flex:2}}>
                  <Text style={{fontSize:32,color:'black',marginTop:0,marginLeft:50}}>Running</Text>
                  </Flex.Item>
                  <Flex.Item style={{flex:2}}>
                  <Text style={{fontSize:18, color:'gray', marginLeft:70}}>Low intensity</Text>
                  </Flex.Item>
                </Flex> 
              </View>
            </Card.Body>
            <Card.Footer
              content=""
              extra="Add training"
            />
          </Card>
        </WingBlank>
        
        
      </View>
    )

    return(  
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}        
        drawerBackgroundColor="#F2F2F2"
        drawerWidth={480}
      >
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
            <Text style={styles.upperTitle}>Charts</Text>
          </Flex.Item>
          <Flex.Item>
            <Icon onPress={() => this.drawer && this.drawer.openDrawer()} style={{alignSelf:'center'}} name='plus-circle' size={48} color='white'/>
          </Flex.Item>
        </Flex>
      </View>
      <View style={styles.lower}>
        <WhiteSpace size="xl" />        
        {/* *************** */}
        <View style={{ flex: 1 }}>       
          <Tabs
            tabs={tabs}
            renderTabBar={tabProps => (
              <View style={{paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center',justifyContent: 'space-evenly' }}>
                {tabProps.tabs.map((tab, i) => (                
                  <TouchableOpacity
                    activeOpacity={0.9} key={tab.key || i} style={{padding: 6}}
                    onPress={() => {
                      const { goToTab, onTabClick } = tabProps;                   
                      onTabClick && onTabClick(tabs[i], i);                   
                      goToTab && goToTab(i);
                    }}>
                    <Text style={{fontSize:26,color: tabProps.activeTab === i ? '#86BD0F' : 'gray'}}>
                      {tab.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}>         
            <ScrollView style={styles.tabSheet}>
              {tabPage1}
            </ScrollView>
            <ScrollView style={styles.tabSheet}>
              {tabPage2}
            </ScrollView>
            <ScrollView style={styles.tabSheet}>
              {tabPage3}
            </ScrollView>
          </Tabs>    
        </View>      
        {/* ********************** */}
      </View>       
    </ScrollView>
    </Drawer>
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
  tabSheet:{   
    backgroundColor: '#F2F2F2',
  }
})