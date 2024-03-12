//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Header = () => {
    return (
        <View style={{marginRight:10,}}>
            <Text style={{fontSize:30,textAlign:'right'}}>0</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Header;
