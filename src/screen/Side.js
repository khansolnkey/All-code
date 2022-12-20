
import React, { useState } from "react";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Imagepath from "../componet/Imagepath";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInput from "../componet/TextInput";
import Buttion from "../componet/Buttion";
import Commanbuttion from "../componet/Commanbuttion";

const Side = ({ navigation }) => {

    const data = [{ text: 'khan' }, { text: 'khan' }, { text: 'khan' },]
    const item = ({ item }) => (
        <View style={{ backgroundColor: '#FFFFFF', width: 200, height: 220, borderRadius: 10, marginHorizontal: 15, marginTop: 30 }}>
            <View style={{ backgroundColor: '#2AB9D3', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 10, }}>
                <Image style={{ height: 60, width: 60, marginTop: hp('-5%') }} source={Imagepath.mouse1} resizeMode='contain' />
                <Text style={{ fontSize: hp('1.7%'), color: '#ffffff' }}>{item.text}{'\n'}<Text style={{ fontSize: hp('1.6%') }}>merta city nagaur</Text></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 11, color: '#ffffff' }}>Current Mode</Text>
                    <Image source={Imagepath.man} style={{ height: 20, width: 20, left: 10 }} />
                </View>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 5 }}>
                <View style={{ borderWidth: 1, borderColor: '#2AB9D3', alignItems: 'center', marginVertical: 5, paddingVertical: 5, borderRadius: 6, }}>
                    <Text>View Profile</Text>
                </View>
                <View style={{ backgroundColor: '#2AB9D3', alignItems: 'center', paddingVertical: 5, borderRadius: 6, marginTop: 5 }}>
                    <Text>View Profile</Text>
                </View>
            </View>
        </View>
    )


const[Select, setSelect] = useState('')
const onSelectLabel =(index) => {
    setSelect(index)
}
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false}>

                <View style={{ backgroundColor: '#5EDEEC', height: hp('13%'), paddingHorizontal: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <TouchableOpacity style={{ flex: 0.5, }}>
                            <Image source={Imagepath.Group} style={{ tintColor: '#ffffff' }} />
                        </TouchableOpacity >
                        <Image source={Imagepath.edii} />
                    </View>



                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, flex: 1 }}>
                       <TouchableOpacity onPress={() => {  onSelectLabel('For You')}}
                       style={{paddingBottom: 10, marginRight: 20, borderBottomWidth:2,borderBottomColor: Select == 'For You' ? 'red' : 'pink'}}>
                            <Text style={{ fontSize: 17, color: '#ffff', fontWeight: 'bold' }}>For You</Text>
                      </TouchableOpacity>
                       <TouchableOpacity onPress={() => { onSelectLabel("Coummity") }}
                       style={{paddingBottom: 10,  marginRight: 20, borderBottomWidth:2,borderBottomColor: Select == 'Coummity' ? 'red' : 'pink'}}>
                            <Text style={{ fontSize: 17, color: '#ffff', fontWeight: 'bold', }} >Coummity</Text>
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
                        <Image source={Imagepath.sun} />
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: '700', left: 10 }}>Good Morning,Amber!{'\n'}<Text style={{ fontSize: 15, color: '#9AACB1' }}> Thursday july 2016</Text></Text>
                    </View>
                    <View style={{ backgroundColor: '#F9F9F9', paddingVertical: 15 }}>
                        <Text style={{ color: '#4E6469', fontWeight: '700' }}>How are you felling?</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <View style={{ borderWidth: 3, borderColor: '#6DDDF2', borderRadius: 10 * 4 }}>
                                <Image source={Imagepath.man} resizeMode='contain' />
                            </View>
                            <Image source={Imagepath.man} resizeMode='contain' style={{ marginLeft: 7 }} />
                            <Image source={Imagepath.man} resizeMode='contain' style={{ marginLeft: 7 }} />
                            <Image source={Imagepath.man} resizeMode='contain' style={{ marginLeft: 7 }} />
                            <Image source={Imagepath.man} resizeMode='contain' style={{ marginLeft: 7 }} />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#5BD8D6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
                    <View></View>
                    <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>View mode history</Text>
                    <Image style={{ tintColor: '#FFFFFF', height: hp('3%'), width: wp('3%'), marginHorizontal: 15 }} source={Imagepath.left} resizeMode='cover' />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: '700' }}>Featured Friends</Text>
                    <Image style={{ height: hp('4%'), width: wp('7%'), }} source={Imagepath.round} resizeMode='contain' />
                </View>

                <FlatList data={data} renderItem={item} keyExtractor={item => item} horizontal />

                <Buttion onPress={() => {
                    navigation.navigate('Singatur');
                }}
                    bgC={'#5EDEEC'} title='OK' />


            </ScrollView>
        </View>
    )
}
export default Side;
