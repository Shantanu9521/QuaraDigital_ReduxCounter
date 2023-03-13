import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity
        onPress={()=>dispatch({type:"INCREMENT"})}>
          <Text style={styles.commonText}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>dispatch({type:"RESET"})}>
          <Text style={styles.commonText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>dispatch({type:"DECREMENT"})}>
          <Text style={styles.commonText}>DECREMENT</Text>
        </TouchableOpacity>
      
    </View>
  );
};
const styles=StyleSheet.create({
  maincontainer:{
    padding:50,
    marginTop:10
  },
  counter:{
    fontSize:80,
    textAlign:'center',
    width:"100%",
    padding:20,
    marginTop:60,
    marginBottom:30,
    color:'black'
  },
  commonText:{
    backgroundColor:'black',
    fontSize:30,
    textAlign:'center',
    padding:20,
    marginBottom:10,
    color:'#fff'
  }
})

export default Counter;
