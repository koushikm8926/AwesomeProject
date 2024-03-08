// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';


// // create a component
// const Login = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <Text>Login</Text>
//             <Button title='Go to Home Screen' onPress={()=>navigation.navigate("Home",{name:"koushik"})}/>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Login;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyComponent;
