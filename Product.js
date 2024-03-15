//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import { add_to_cart } from './redux/action';
import { UseDispatch, useDispatch } from 'react-redux';

// create a component
const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const handleAddToCart =(item)=>{
    //console.warn("called",item);
    //dispatch(add_to_cart(item))
  }
  return (
    <ScrollView>
        <View style={{flexDirection:'row',borderWidth:1,borderColor:'black',marginBottom:10,marginTop:10,borderRadius:10,}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize: 24}}>{item.name}</Text>
                <Text style={{fontSize: 24}}>{item.price}</Text>
                <Text style={{fontSize: 24}}>{item.color}</Text>
            </View>
            <View style={{flex:1}}>
                <Image source={{uri: item.image}} style={{height: 200, width: 200}} />
            </View>
        </View>
            <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}/>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Product;
