import React, { useRef, useState } from "react";
import { View, Text, Modal } from 'react-native';
import Buttion from "../componet/Buttion";
import Commanbuttion from "../componet/Commanbuttion";
import SignatureCapture from "react-native-signature-capture";


const Singatur = ({ navigation }) => {

  const sign = useRef();
  const saveSign = () => { sign.current.saveImage(); };
  const resetSign = () => { sign.current.resetImage(); };
  const _onSaveEvent = () => { alert('Signature Captured Successfully',); };


const [Select, serSelect] = useState(0)
const Onclick =(value) => {
if (value == 'plus') {
  if (Select < 30) {
    serSelect(Select + 2) 
      
    }
  } else {
    if(Select > 0){
serSelect (Select - 1)
    }
  }
}




  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDED' }}>
      <View style={{ alignItems: 'center', padding: 15, }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>SINGATUR</Text>
      </View>
      <SignatureCapture
        style={{ flex: 0.5, }}
        ref={sign}
        onSaveEvent={_onSaveEvent}
        // onDragEvent={_onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#ffffff"
        strokeColor="black"
        minStrokeWidth={10}
        maxStrokeWidth={10}
        viewMode={'portrait'}
      />

      <View style={{ flexDirection: 'row' }}>
        <Buttion onPress={() => { resetSign() }}
          title='Delet' bgC='#52BE80' />
        <Buttion onPress={() => { saveSign() }}
          title='Sumit' bgC='#52BE80' />
      </View>


      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <View style={{ alignItems: 'center', borderWidth: 3, borderRadius: 10, height: 50, width: 50, borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>{Select}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Buttion onPress={() => { Onclick("plus") }} bgC='#52BE80' title='Plus+' />
        <Buttion onPress={() => { Onclick('') }} bgC='#52BE80' title='Mins-' />
      </View>


      <View style={{ flex: 0.4, justifyContent: 'flex-end' }}>
        <Commanbuttion onPress={() => { navigation.navigate('Image') }}
          bgC='#52BE80'
          title='SUBMET' />
      </View>
    </View>


  )
}
export default Singatur;