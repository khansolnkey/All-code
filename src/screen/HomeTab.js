
import React, { useState } from "react";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Imagepath from "../componet/Imagepath";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Map from "./Map";
import Lodar from "./Lodar";


const HomeTab = ({ navigation }) => {

    const [selectLabel, setselectLabel] = useState("")

    const onSelectLabel = (index) => {
        setselectLabel(index)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#5EDEEC', height: hp('13%'), paddingHorizontal: wp(4), }}>

                <View style={{ flex: 1, alignItems: "center", flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('MyDrawer') }}
                        style={{ flex: 0.5, }}>
                        <Image source={Imagepath.Group} style={{ tintColor: '#ffffff' }} />
                    </TouchableOpacity>
                    <Image source={Imagepath.edii} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', top: -2 }}>
                    <TouchableOpacity onPress={() => { onSelectLabel("forYou") }}
                        style={{ marginRight: wp(8), borderBottomWidth: 1.5, borderBottomColor: selectLabel == "forYou" ? "#fff" : "#5EDEEC", paddingBottom: 10 }}>
                        <Text style={{ fontSize: 17, color: '#ffff', fontWeight: 'bold' }}>For You</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { onSelectLabel("coummity") }}
                        style={{ marginRight: wp(8), paddingBottom: 10, borderBottomWidth: 1.5, borderBottomColor: selectLabel == "coummity" ? "#fff" : "#5EDEEC" }}>
                        <Text style={{ fontSize: 17, color: '#ffff', fontWeight: 'bold', }} >Coummity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onSelectLabel("Khan") }}
                        style={{ paddingBottom: 10, borderBottomWidth: 1.5, borderBottomColor: selectLabel == "Khan" ? "#fff" : "#5EDEEC" }}>
                        <Text style={{ fontSize: 17, color: '#ffff', fontWeight: 'bold', }} >Khan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {selectLabel == "forYou" && <Map />}
            {selectLabel == 'Coummity' && <Lodar />}
        </View>
    )
}
export default HomeTab;
