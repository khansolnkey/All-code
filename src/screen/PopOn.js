import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import Commanbuttion from "../componet/Commanbuttion";
import Buttion from "../componet/Buttion";

const PopOn = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [colorGet, setColor] = useState("pink");

    const onClickSelectColor = (color) => {
        setColor(color)
        setModalVisible(false)
    }

    const data = [
        { backgroundColor: "pink", },
        { backgroundColor: "red", },
        { backgroundColor: "yellow", },
        { backgroundColor: "blue", },
        { backgroundColor: "orange", },
        { backgroundColor: "purple", },

    ]
    const item = ({ item, }) => (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20, marginTop: 20 }}>
            <TouchableOpacity onPress={() => { onClickSelectColor(item.backgroundColor) }}
                style={[style.button, { backgroundColor: item.backgroundColor }]}>
                <Text>{item.titel}</Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <View style={{ flex: 1, backgroundColor: colorGet }}>
            {/* {OneTouch()} */}
            <Text style={{ fontSize: 20, }}>PopOn SCREEN</Text>
            <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Buttion onPress={() => { setModalVisible(!modalVisible) }}
                    bgC={'#5EDEEC'} title='ok' />
            </View>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}>
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#fff", width: "60%", height: 130, justifyContent: "center", borderRadius: 20 }}>
                        <FlatList data={data}
                            renderItem={item}
                            keyExtractor={item.item}
                            numColumns={3}
                        />
                    </View>
                </View>
            </Modal>
            <Commanbuttion onPress={() => { navigation.navigate('BottamTap') }}
                bgC={'#5EDEEC'} title='SUMBET' />

        </View >

    )
}
export default PopOn;

const style = StyleSheet.create({
    button: { height: 30, width: 30, borderRadius: 30 / 2 }
})