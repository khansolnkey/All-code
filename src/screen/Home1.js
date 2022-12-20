import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Switch, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Imagepath from "../componet/Imagepath";
import Swiper from 'react-native-swiper';
import Slider from '@react-native-community/slider';
import { CountryPicker } from "react-native-country-codes-picker";
import MapView from 'react-native-maps';
import Buttion from "../componet/Buttion";
import Commanbuttion from "../componet/Commanbuttion";

const Home1 = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const [selectImage, setselectImage] = useState('')
    const onClickImages = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setselectImage(image.path);
        });
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [sliderNew, setSliderNew] = useState(0)
    const onChangeSlide = (ffff) => {
        setSliderNew(ffff)
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [colorGet, setColor] = useState("pink")
    const onClickSelectColor = (color) => {
        setColor(color)
    }


    const OneTouch = () => {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}>
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#fff", width: "60%", height: 130, justifyContent: "center", borderRadius: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20, marginBottom: 30 }}>
                            <TouchableOpacity onPress={() => { onClickSelectColor("red") }}
                                style={{ backgroundColor: "red", height: 30, width: 30, borderRadius: 30 / 2 }} />
                            <TouchableOpacity onPress={() => { onClickSelectColor("green") }}
                                style={{ backgroundColor: "green", height: 30, width: 30, borderRadius: 30 / 2 }} />
                            <TouchableOpacity onPress={() => { onClickSelectColor("pink") }}
                                style={{ backgroundColor: "pink", height: 30, width: 30, borderRadius: 30 / 2 }} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20 }}>
                            <TouchableOpacity onPress={() => { onClickSelectColor("yellow") }}
                                style={{ backgroundColor: "yellow", height: 30, width: 30, borderRadius: 30 / 2 }} />
                            <TouchableOpacity onPress={() => { onClickSelectColor("orange") }}
                                style={{ backgroundColor: "orange", height: 30, width: 30, borderRadius: 30 / 2 }} />
                            <TouchableOpacity onPress={() => { onClickSelectColor("blue") }}
                                style={{ backgroundColor: "blue", height: 30, width: 30, borderRadius: 30 / 2 }} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: isEnabled ? 'pink' : 'skyblue' }}>
            {OneTouch()}
            
            <TouchableOpacity onPress={() => { navigation.navigate('TopTab') }} style={{ alignItems: 'center' }}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>Home1</Text>
                <Text style={{ fontSize: 30, fontWeight: '800', color: 'red' }}>{sliderNew}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <Slider
                    style={{ width: 250, height: 50 }}
                    minimumValue={0}
                    maximumValue={50}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="#000000"
                    value={sliderNew}
                    step={1}
                    onValueChange={(sliderValue) => { onChangeSlide(sliderValue) }}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{ marginHorizontal: 15 }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>


            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Swiper style={{ height: 250, }} autoplay={false}>
                    <View style={{ backgroundColor: 'red', alignItems: 'center', }}>
                        <Image style={{ height: 200, width: 200 }} resizeMode='cover' source={Imagepath.man} />
                    </View>
                    <View style={{ backgroundColor: 'red', alignItems: 'center', }}>
                        <Image style={{ height: 200, width: 200 }} resizeMode='cover' source={Imagepath.man} />
                    </View>
                    <View style={{ backgroundColor: 'red', alignItems: 'center', }}>
                        <Image style={{ height: 200, width: 200 }} resizeMode='cover' source={Imagepath.man} />
                    </View>
                </Swiper>
            </View>



 {selectImage == '' ?
                <TouchableOpacity
                    onPress={() => { onClickImages() }}
                    style={{ height: 100, width: 100, backgroundColor: '#85C1E9', borderWidth: 1.5, borderStyle: 'dashed', borderColor: '#2574FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={Imagepath.edii} style={{ height: 33, width: 27, }} resizeMode="contain" />
                    <Text style={{ color: '#1E1F20', marginTop: 10 }}>UPLOAD</Text>
                </TouchableOpacity>
                :
                <View>
                    <Image source={{ uri: selectImage }} style={{ height: 100, width: 100, borderRadius: 8, }} />
                </View>
            } 


            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
                <Commanbuttion onPress={() => {
                    navigation.navigate('HomeTab');
                    // setModalVisible(!modalVisible)
                }}
                    bgC={'#000'} title='SUMET' />
            </View>

        </View>
    )
}
export default Home1;





// import React, { useState, useRef } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text, Image, Dimensions,
//     SafeAreaView,
//     TouchableOpacity
// } from 'react-native';

// import MapView, { Marker } from 'react-native-maps';
// // import MapViewDirections from 'react-native-maps-directions';
// import { Button } from 'react-native-paper';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// export default function Map({navigation}) {
//     const mapRef = useRef()
//     const [state, setstate] = useState({
//         pickupCoeds: {
//             latitude: 26.956432,
//             longitude: 75.741257,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         },
//         droplocationCors: {
//             latitude: 28.895809,
//             longitude: 28.895809,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         }
//     })
//     const { pickupCoeds, droplocationCors } = state
//     const GOOGLE_MAPS_APIKEY = 'AIzaSyCn8hEUj7EOpIFOfsysqdYBz2-PMsz_V9Q';
//     return (
//         <View style={styles.body}> 
//             <MapView
//                 ref={mapRef}
//                 style={styles.map}
//                 initialRegion={pickupCoeds}
//             >
//                 {/* <MapViewDirections
//                     origin={pickupCoeds}
//                     destination={droplocationCors}
//                     apikey={GOOGLE_MAPS_APIKEY}
//                     strokeColor={"blue"}
//                     strokeWidth={7}

//                 /> */}


//                 <Marker coordinate={pickupCoeds} />

//                 <Marker coordinate={droplocationCors} />

//             </MapView>
//           <TouchableOpacity onPress={()=>{navigation.navigate("Timeswich")}}
//           style={{backgroundColor:"#1F95A0",flex:1,justifyContent:"center"}}>
//             <Text style={{fontSize:22,color:"white",fontWeight:"700",textAlign:"center"}}>Arrived At Location</Text>
//           </TouchableOpacity>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,

//     },
//     text: {
//         fontSize: 40,
//         margin: 10
//     },
//     map: {
//         width: '100%',
//         position:'relative',
//         flex:7

//     }
// });

{/* {selectImage == '' ?
                <TouchableOpacity
                    onPress={() => { onClickImages() }}
                    style={{ height: 100, width: 100, backgroundColor: '#85C1E9', borderWidth: 1.5, borderStyle: 'dashed', borderColor: '#2574FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={Imagepath.edii} style={{ height: 33, width: 27, }} resizeMode="contain" />
                    <Text style={{ color: '#1E1F20', marginTop: 10 }}>UPLOAD</Text>
                </TouchableOpacity>
                :
                <View>
                    <Image source={{ uri: selectImage }} style={{ height: 100, width: 100, borderRadius: 8, }} />
                </View>
            } */}
