// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Screens/Home';
// import Login from './Screens/Login';
// const Stack = createNativeStackNavigator();
// // create a component
// const MyComponent = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     //api calling
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//     // console.warn(result);
//   };
//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>MyComponent</Text>
//       {data.length ?
//       data.map((item,id)=>{
//         return(
//           <View key={id}>
//             <Text>{item.title}</Text>
//             </View>
//         )
//       })
//       : null}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
// });

//make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const [data, setData] = useState([]);
//   const getApiData = async () => {
//     const url = 'http://192.168.111.1:3000/user';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//     // console.warn(result);
//   };
//   useEffect(() => {
//     getApiData();
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text>MyComponent</Text>
//       {data.length ? (

//         data.map((item, id)=>{
//           return(
//             <View key={id}>
//               <Text>{item.name}</Text>
//               </View>
//           )
//         })

//       ) : null}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component, useEffect} from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const getAPIData = async () => {
//     const data = {
//       name: 'rahul',
//       age: 30,
//       id: 7,
//     };

//     const url = 'http://192.168.111.1:3000/user';
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data),
//     });
//     result = await result.json();
//     console.warn(result);
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>MyComponent</Text>
//       <Button title="Send data to API" onPress={getAPIData} />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default MyComponent;

// //import liraries
// import React, { Component, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// // create a component
// const MyComponent = () => {
//   const data= {
//     id:4,
//     name:"suman",
//     age:30,
//   }
//   const getAPIdata = async()=>{
//    const url = "http://192.168.111.1:3000/user";
//    let result = await fetch(url,{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(data)
//    });
//     result = await result.json()
//     console.warn(result);

//   }
//   useEffect(()=>{
//     getAPIdata();
//   },[])
//   return (
//     <View style={styles.container}>
//       <Text>MyComponent</Text>
//       <Button title='Send Data to the API' onPress={getAPIdata}/>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

// // create a component
// const MyComponent = () => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState();
//   const [conformemail, setConfirmEmail] = useState();
//   // console.log(name);
//   // console.log(email);
//   // console.log(conformemail);
//   const data ={
//     name:name,
//     email:email,
//     confirmEmail:conformemail,
//   }

//   const getAPIdata = async()=>{
//     // console.warn("hello world");
//     const url = "http://192.168.111.1:3000/user";
//     let result = await fetch(url,{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify(data),
//     });
//     result= await result.json();
//     console.warn("data Successfully sent")
//   }

//   useEffect(()=>{
//     getAPIdata();
//   },[])

//   return (
//     <View style={styles.container}>
//       <Text style={styles.Header}>Registration Form</Text>

//       <TextInput
//         placeholder="Enter Your Name"
//         style={styles.TextInput}
//         onChangeText={text => setName(text)}
//         value={name}
//       />
//       <TextInput
//         placeholder="Enter Your Email"
//         style={styles.TextInput}
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Enter Your Confirm Email"
//         style={styles.TextInput}
//         value={conformemail}
//         onChangeText={text => setConfirmEmail(text)}
//       />
//       <Button title="Submit Data To API" onPress={getAPIdata} />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
//   Header: {
//     fontSize: 20,
//     color: 'blue',
//     marginVertical: 10,
//   },
//   TextInput: {
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 30,
//     width: 300,
//     margin: 10,
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet, Button, Alert} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const [data, setData] = useState([]);
//   const getAPIData = async () => {
//     const url = 'http://192.168.111.1:3000/user';
//     let result = await fetch(url);
//     result = await result.json();
//     // console.warn(result);
//     if (result) {
//       setData(result);
//     }
//   };

//   const deleteData = async id => {
//     const url = 'http://192.168.111.1:3000/user';
//     let result = await fetch(`${url}/${id}`, {
//       method: 'Delete',
//     });
//     result = await result.json();
//     if (result) {
//       // Alert.alert('Alert Title', 'My Alert Msg', [
//       //   {
//       //     text: 'Cancel',
//       //     onPress: () => console.log('Cancel Pressed'),
//       //     style: 'cancel',
//       //   },
//       //   {text: 'OK', onPress: () => console.log('OK Pressed')},
//       // ]);
//       getAPIData();
//     }
//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View>
//       <View style={styles.headers}>
//         <Text style={{color: 'white', fontSize: 20}}>NAME</Text>
//         <Text style={{color: 'white', fontSize: 20}}>BUTTON</Text>
//       </View>
//       {data.length
//         ? data.map((item, id) => {
//             return (
//               <View key={id} style={styles.table}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}>
//                   <Text style={{color: 'white', fontSize: 20}}>
//                     {item.name}
//                   </Text>
//                   <Button title="Delete" onPress={() => deleteData(item.id)} />
//                 </View>
//               </View>
//             );
//           })
//         : null}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
//   headers: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'orange',
//     margin: 10,
//     padding: 10,
//     borderRadius: 15,
//   },
//   table: {
//     backgroundColor: 'orange',
//     margin: 10,
//     padding: 10,
//     borderRadius: 15,
//   },
// });

// //make this component available to the app
// export default MyComponent;

// //import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet, Button, Modal, TextInput} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [data, setData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(undefined);
//   const getApidata = async () => {
//     const url = 'http://192.168.111.1:3000/user';
//     let result = await fetch(url);
//     result = await result.json();
//     // console.warn(result);
//     if (result) {
//       setData(result);
//     }
//   };

//   const updateUser = data => {
//     setShowModal(true);
//     setSelectedUser(data);
//   };

//   useEffect(() => {
//     getApidata();
//   }, []);

//   return (
//     <View>
//       <View style={[styles.apiview, {marginTop: 10}]}>
//         <Text style={styles.apitext}>Name</Text>
//         <Text style={styles.apitext}>Update</Text>
//       </View>

//       {data.length ? (
//         data.map((item, id) => {
//           return (
//             <View key={id} style={styles.apiview}>
//               <Text style={styles.apitext}>{item.name}</Text>
//               <Button title="update" onPress={() => updateUser(item)} />
//             </View>
//           );
//         })
//       ) : (
//         <View>
//           <Text>no data found</Text>
//         </View>
//       )}

//       <Modal transparent={true} visible={showModal}>
//         <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getApidata={getApidata} />
//       </Modal>
//     </View>
//   );
// };

// const UserModal = props => {

//   //console.warn(props.selectedUser)
//   const [name, setName] = useState()
//   const [age, setAge] = useState()
//   //console.warn(age)
//   useEffect(()=>{
//     if(props.selectedUser){
//       setName(props.selectedUser.name)
//       setAge(props.selectedUser.age.toString())
//     }
// },[props.selectedUser])

// const updateData = async ()=> {
//   //console.warn(name,age)
//      const url = "http://192.168.111.1:3000/user";
//      const id = props.selectedUser.id;
//      let result =await fetch (`${url}/${id}`,{
//        method:'Put',
//        headers:{
//          "Content-Type":"application/json"
//        },
//        body:JSON.stringify({name,age})
//     });

//      result= await result.json();

//      if (result){
//       // console.warn(name, age);
//        props.getApidata();
//        props.setShowModal(false);
//      }
// }

//   return (
//     <View style={styles.CenteredView}>
//       <View style={styles.modalView}>
//         <TextInput style={styles.textinput} value={name} onChangeText={(text)=>setName(text)} />
//         <TextInput style={styles.textinput} value={age}  onChangeText={(text)=>setAge(text)}/>
//         <View style={{marginBottom:10,}}>
//           <Button title="Update"  onPress={updateData}/>
//         </View>
//         <Button title="close" onPress={() => props.setShowModal(false)} />
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#2c3e50',
//   },
//   apiview: {
//     backgroundColor: 'orange',
//     marginBottom: 10,
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   apitext: {
//     fontSize: 20,
//     color: 'white',
//   },
//   CenteredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 40,
//     borderRadius: 20,
//     shadowColor: 'black',
//     shadowOpacity: 0.6,
//     elevation: 5,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: 'black',
//     width: 300,
//     marginBottom: 15,
//   },
// });

// //make this component available to the app
// export default MyComponent;

//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const MyComponent = () => {

  const [data,setData]= useState([]);

  const search =async (text)=>{
    //console.warn(text);
    const url = `http://192.168.111.1:3000/user?name=${text}`;
    let result = await fetch(url);
    result =  await result.json();
    //console.warn(result);
    if (result){
    setData(result)
    }
  }
  return (
    <View>
      <View style={{marginTop:15,}}>
        <TextInput style={styles.TextInput} placeholder='search' onChangeText={(text)=>search(text)}/>  
      </View>
      {
        data.length ? data.map((item,id)=><View key={id}><Text>{item.name}</Text></View>):null
      }
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
  TextInput:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:15,
    margin:10,
    padding:10,
  }
});

//make this component available to the app
export default MyComponent;
