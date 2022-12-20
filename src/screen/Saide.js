import React, { useState, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import Imagepath from '../componet/Imagepath';
import LinearGradient from 'react-native-linear-gradient';
const Saide = ({ navigation }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 
    count > 0 &&
    setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
    if (count == 30) {
      alert('okkkkkkkkkk')
      return
    } else if (count == 20) {
      alert('thanks')
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <View style={{ flex: 1 }}>
<LinearGradient

  colors={['#4c669f', '#3b5998', '#192f6a','#f00', ]}  style={{flex: 1}}>   
   <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Saide1', {}) }}
          style={{ backgroundColor: 'red', height: 120, width: 170, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
          {loader === true ? <ActivityIndicator size="large" color={'#000'} />
            :
            <>
              <Image source={Imagepath.man} resizeMode={'cover'} />
            </>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Saide1', {}) }}
          style={{ backgroundColor: 'pink', height: 120, width: 170, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
          {loader === true ? <ActivityIndicator size="large" color={'#000'} />
            :
            <>
              <Image source={Imagepath.hidden} style={{ height: 60, width: 60 }} resizeMode={"cover"} />
            </>}
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Lodar', {}) }}
          style={{ backgroundColor: 'skyblue', height: 120, width: '94%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 20 }}>
          {loader === true ? <ActivityIndicator size="large" color={'#000'} />
            :
            <>
              <Image source={Imagepath.button} resizeMode={'cover'} style={{ height: 60, width: 60 }} />
            </>}
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, color: "red", textAlign: "center", marginVertical: 15 }}>{count}</Text>



      </LinearGradient> 
    </View>


  );
}
export default Saide;

