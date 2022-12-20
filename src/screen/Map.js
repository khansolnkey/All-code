
import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text, Image, Dimensions,
    SafeAreaView,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default function Map({navigation}) {
    const mapRef = useRef()
    const [state, setstate] = useState({
        pickupCoeds: {
            latitude: 26.956432,
            longitude: 75.741257,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCors: {
            latitude: 28.895809,
            longitude: 28.895809,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
    const { pickupCoeds, droplocationCors } = state
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCn8hEUj7EOpIFOfsysqdYBz2-PMsz_V9Q';

    useEffect(()=>{
        requestPermissions();
        
    },[])

    async function requestPermissions() {
        if (Platform.OS === 'ios') {
          Geolocation.requestAuthorization();
          Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
           authorizationLevel: 'whenInUse',
         });
        }
      
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          currentLocationGet();
        }
      }

      const currentLocationGet=()=>{
        console.log('--------:::::::::::::::::::::::: ', );
        Geolocation.getCurrentPosition(
            (position) => {
              console.log('--------position::: ', position);
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    return (
        <View style={styles.body}> 
            <MapView
                ref={mapRef}
                style={styles.map}
                zoomEnabled={true} 
                showsUserLocation={true}
                initialRegion={pickupCoeds}
            >
                <MapViewDirections
                    origin={pickupCoeds}
                    destination={droplocationCors}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeColor={"blue"}
                    strokeWidth={7}             
                />
                <Marker coordinate={pickupCoeds} />

                <Marker coordinate={droplocationCors} />

            </MapView>
          <TouchableOpacity onPress={()=>{navigation.navigate("Saide")}}
          style={{backgroundColor:"#1F95A0",flex:1,justifyContent:"center"}}>
            <Text style={{fontSize:22,color:"white",fontWeight:"700",textAlign:"center"}}>Arrived At Location</Text>
          </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,      
    },
    text: {
        fontSize: 40,
        margin: 10
    },
    map: {
        width: '100%',
        position:'relative',
        flex:7  
    }
});



// import React from 'react';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';  
// import MapView from 'react-native-maps';  
// import { Marker } from 'react-native-maps';  
//  import Commanbuttion from '../componet/Commanbuttion'; 

// const Map=()=>{ 
//     return (  

//         <View style={{ flex: 1}} >
//       <View style={styles.MainContainer}>  
  
//         <MapView  
//           style={styles.mapStyle}  
//           showsUserLocation={false}  
//           zoomEnabled={true}  
//           zoomControlEnabled={true}  
//           initialRegion={{  
//             latitude: 28.579660,   
//             longitude: 77.321110,  
//             latitudeDelta: 0.0922,  
//             longitudeDelta: 0.0421,  
//           }}>  
  
//           <Marker  
//             coordinate={{ latitude: 28.579660, longitude: 77.321110 }}  
//             title={"JavaTpoint"}  
//             description={"Java Training Institute"}  
//           />  
//         </MapView>  
//       </View>  
// </View>
//     );  
    
// }  
  
// const styles = StyleSheet.create({  
//   MainContainer: {  
//     position: 'absolute',  
//     top: 0,  
//     left: 0,  
//     right: 0,  
//     bottom: 0,  
//     alignItems: 'center',  
//     justifyContent: 'flex-end',  
//   },  
//   mapStyle: {  
//     position: 'absolute',  
//     top: 0,  
//     left: 0,  
//     right: 0,  
//     bottom: 0,  
//   },  
// });  
// export default Map;