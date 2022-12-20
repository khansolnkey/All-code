// import React, {useRef} from 'react';
//     import {StyleSheet, Button, Text, SafeAreaView} from 'react-native';
//     // import {Timer, Countdown} from 'react-native-element-timer';

//     const Timeout = _props => {
//         const timerRef = useRef(null);
//         const countdownRef = useRef(null);

//         return (
//             <SafeAreaView style={styles.container}>
//                 <Text style={styles.text}>Timer:</Text>
//                 <Timer
//                     ref={timerRef}
//                     style={styles.timer}
//                     textStyle={styles.timerText}
//                     // onTimes={e => {}}
//                     // onPause={e => {}}
//                     // onEnd={e => {}}
//                 />
//                 {/* <Button
//                     style={styles.button}
//                     title={'Start'}
//                     onPress={() => {
//                         timerRef.current.start();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Pause'}
//                     onPress={() => {
//                         timerRef.current.pause();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Resume'}
//                     onPress={() => {
//                         timerRef.current.resume();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Stop'}
//                     onPress={() => {
//                         timerRef.current.stop();
//                     }}
//                 /> */}

//                 <Text style={styles.text}>Countdown:</Text>
//                 <Countdown
//                     // ref={countdownRef}
//                     style={styles.timer}
//                     textStyle={styles.timerText}
//                     initialSeconds={5}
//                     // onTimes={e => {}}
//                     // onPause={e => {}}
//                     // onEnd={(e) => {}}
//                 />
//                 {/* <Button
//                     style={styles.button}
//                     title={'Start'}
//                     onPress={() => {
//                         countdownRef.current.start();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Pause'}
//                     onPress={() => {
//                         countdownRef.current.pause();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Resume'}
//                     onPress={() => {
//                         countdownRef.current.resume();
//                     }}
//                 />
//                 <Button
//                     style={styles.button}
//                     title={'Stop'}
//                     onPress={() => {
//                         countdownRef.current.stop();
//                     }}
//                 /> */}
//             </SafeAreaView>
//         );
//     };

//     export default Timeout;

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             alignItems: 'center',
//             padding: 20,
//         },
//         text: {
//             fontWeight: 'bold',
//             fontSize: 16,
//             marginTop: 40,
//         },
//         timer: {
//             marginVertical: 10,
//         },
//         timerText: {
//             fontSize: 20,
//         },
//         button: {
//             marginVertical: 5,
//             backgroundColor: 'white',
//             borderRadius: 24,
//             width: 100,
//         },
//     });



// const storeData = async (value) => {
//     try {
//         const jsonValue = JSON.stringify(value)
//         await AsyncStorage.setItem('@storage_Key', jsonValue)
//     } catch (e) {
//         // saving error
//     }
// }




import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Commanbuttion from "../componet/Commanbuttion";
import Imagepath from "../componet/Imagepath";


const Lodar = ({ navigation }) => {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, []);


    const data = [
        { title: 'KHAN', address: 'Jhotwara', age: '30',Image:Imagepath.edii },
        { title: 'Altaf', address: 'Roon', age: '19',Image:Imagepath.Group },
        { title: 'Asfak', address: 'Jhotwara', age: '20',Image:Imagepath.hidden },
        { title: 'Jamil', address: 'Jhotwara', age: '22',Image:Imagepath.edii },
        { title: 'Arman', address: 'Jhotwara', age: '18',Image:Imagepath.man },
        { title: 'Tslim', address: 'Jhotwara', age: '24',Image:Imagepath.view },
        { title: 'Ndim', address: 'Jhotwara', age: '30',Image:Imagepath.edii },

    ]
 
    const item = ({ item }) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Lodar1', { carData: item }) }}
            style={styles.button}>
            {loader === true ? <ActivityIndicator size="large" color={'#000'} />
                :
                <>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={item.Image} style={{ height: 60, width: 60 }} resizeMode={"cover"} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={[styles.lableText,]}>Name: <Text style={[styles.lableText, { color: '#000000' }]}>{item.title}</Text></Text>
                            <Text style={styles.lableText}> addresh: <Text style={[styles.lableText, { color: '#000000' }]}>{item.address}</Text></Text>
                            <Text style={styles.lableText}> age: <Text style={[styles.lableText, { color: '#000000' }]}>{item.age}</Text></Text>
                        </View>
                    </View>
                </>
            }
        </TouchableOpacity>
    )

    return (
        <View style={styles.View}>
            <View style={{ backgroundColor: 'skyblue', alignItems: 'center', padding: 15 }}>
                <Text style={styles.Text}>OPEN LODAR</Text>
            </View>
            <FlatList
                data={data} renderItem={item} keyExtractor={item => item} />

        </View>
    );
};
 
   const styles = StyleSheet.create({

    View: { flex: 1 },
    button: {
        backgroundColor: "#fff", height: 130, borderRadius: 20, justifyContent: 'center',
        paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 20, marginTop: 10
    },
    lableText: { fontSize: 20, color: '#00000090' },
    Text: { fontSize: 20, fontWeight: 'bold', color: 'red' }

});

export default Lodar;