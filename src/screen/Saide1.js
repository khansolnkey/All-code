import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Imagepath from '../componet/Imagepath';

const Saide1 = ({ navigation, route }) => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000);
    }, []);

    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval =
            seconds > 0 && setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        if (seconds == 30) {
            alert("30 second com.")
            return
        } else if (seconds == 20) {
            alert("20 second com.")
        } else if (seconds == 10) {
            alert("10 second com.")
        }
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Saide1', {}) }}
                    style={{ backgroundColor: 'red', height: 120, width: 170, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    {loader === true ? <ActivityIndicator size="large" color={'#000'} />
                        :
                        <>
                            <Image source={Imagepath.man} resizeMode={'cover'} />

                        </>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Lodar', {}) }}
                    style={{ backgroundColor: 'pink', height: 120, width: 170, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    {loader === true ? <ActivityIndicator size="large" color={'#000'} />
                        :
                        <>
                            <Image source={Imagepath.hidden} style={{ height: 60, width: 60 }} resizeMode={"cover"} />
                        </>}
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: "red", textAlign: "center", marginVertical: 15 }}>{seconds}</Text>
        </View>
    );
}

export default Saide1;

