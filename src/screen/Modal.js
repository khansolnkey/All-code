import React, { useState } from 'react';

//import all the components we are going to use
import {  Modal, Image,Button,  View,  Text,  SafeAreaView,
      StyleSheet,  TouchableOpacity,Pressable} from 'react-native';
import Buttion from '../componet/Buttion';
import Singatur from './Singatur';
import Imagepath from '../componet/Imagepath';

const Modals = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {setShowModal(!showModal);}}>
               
                              
                                
                   <Pressable
                    style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: '#85C1E9' }}

                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={{ backgroundColor: "white", padding: 50,  alignItems: 'center', borderRadius: 15, shadowOpacity: 0.25, elevation: 5 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('PopOn') }}>
                        <Image source={Imagepath.man}/>
                        </TouchableOpacity>
                        <Text style={{ color: '#1E1F20', fontSize: 18, marginTop: 15 }}>Open Map Screen</Text>
                        <Text style={{ color: '#1E1F20', fontSize: 18, marginTop: 3 }}>approval</Text>
                        <Text>After approval from admin you</Text>
                        <Text>can use the app</Text>
                    </View>
                </Pressable>
          
        </Modal>
       
        <Buttion bgC='red'
          title=" Open Modal"
          onPress={() => {setShowModal(true);}}/>
         
      </View>
    </SafeAreaView>
  );
};
export default Modals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
    
  },

});






// import { NavigationContainer } from "@react-navigation/native";
// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
// import Imagepath from "../componet/Imagepath";

// const Modals = ({ navigation }) => {
//     const [modalVisible, setModalVisible] = useState(false);
//     return (
//         <View style={{ flex: 1, }}>
//             <Modal
              
//                 animationType='fade'
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
               
//                     Alert.alert("Modal has been closed.");
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <Pressable
//                     style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: 'red' }}

//                     // onPress={() => setModalVisible(!modalVisible)}
//                 >
//                     <View style={{ backgroundColor: "white", padding: 50,  alignItems: 'center', borderRadius: 15, shadowOpacity: 0.25, elevation: 5 }}>
//                         <TouchableOpacity onPress={() => { navigation.navigate('MyDrawer') }}>
//                             <Image source={Imagepath.edii} style={{ height: 55, width: 55, }} />
//                         </TouchableOpacity>
//                         <Text style={{ color: '#1E1F20', fontSize: 18, marginTop: 15 }}>Registration submitt for</Text>
//                         <Text style={{ color: '#1E1F20', fontSize: 18, marginTop: 3 }}>approval</Text>
//                         <Text>After approval from admin you</Text>
//                         <Text>can use the app</Text>
//                     </View>
//                 </Pressable>
//             </Modal>
//             <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "pink" }}
//                 onPress={() => setModalVisible(true)}
//             >
//                 <View style={{ justifyContent: 'center', backgroundColor: 'red', alignItems: 'center', borderRadius: 10, padding: 15 }}>
//                     <Text style={{ color: 'white' }}>Show Modal</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// }



// export default Modals;
