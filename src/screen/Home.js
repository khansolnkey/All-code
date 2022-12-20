
import React, { useState } from "react";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Imagepath from "../componet/Imagepath";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Commanbuttion from "../componet/Commanbuttion";

const Home = ({ navigation }) => {

    const [openImage, setopenImage] = useState('');

    const [selectLabel, setselectLabel] = useState('');
    const onSelectLabel = (index) => {
        setselectLabel(index)
    }

    const data = [
        { text: Imagepath.man, },
        { text: Imagepath.man, },
        { text: Imagepath.man, },
        { text: Imagepath.man, },]

    const item = ({ item, index }) => (
            <View style={{ flexDirection: 'row', marginTop: 5, }}>
                <TouchableOpacity onPress={() => { onSelectLabel(index) }}
                    style={[style.button, { borderColor: selectLabel === index ? '#000' : 'white', }]}>
                    <Image source={item.text} resizeMode='contain' />
                </TouchableOpacity>
            </View>

        )
   

    const [onImage, setonImage] = useState('')
    const OnselectImage = (index) => {
        setonImage(index)
    }

    const data1 = [{ text: 'khan', borderColor: onImage },
    { text: 'khan' },
    { text: 'khan' },]
    const item1 = ({ item, index }) => (

        <View style={{ backgroundColor: '#FFFFFF', width: 200, height: 220, borderRadius: 10, marginHorizontal: 15, marginTop: 30 }}>
            <View style={{ backgroundColor: '#2AB9D3', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 10, }}>
                <Image style={{ height: 60, width: 60, marginTop: hp('-5%') }} source={Imagepath.mouse1} resizeMode='contain' />
                <Text style={{ fontSize: hp('1.7%'), color: '#ffffff' }}>{item.text}{'\n'}<Text style={{ fontSize: hp('1.6%') }}>merta city nagaur</Text></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 11, color: '#ffffff' }}>Current Mode</Text>
                    <TouchableOpacity onPress={() => { OnselectImage(index) }}
                        style={[style.button, { borderColor: onImage === index ? '#000' : 'white', }]}>

                        <Image source={Imagepath.man} style={{ height: 20, width: 20, }} />

                    </TouchableOpacity>
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

const khan = [
{khann:Imagepath.man},
{khann:Imagepath.man},
{khann:Imagepath.man},
]
const mohammad =({item, index}) =>(
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={()=>Buttionclick(index)}
    style={[style.View,{borderColor: Onclick === index ? 'red' : '#000'}]}>
    <Image source={item.khann}/>
    </TouchableOpacity>
    </View>
)
const [Onclick, setOnclick]= useState('')
const Buttionclick = (index) => {
    setOnclick(index)
}
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                        <Image source={Imagepath.man} />
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: '700', left: 10 }}>Good Morning,Amber!{'\n'}<Text style={{ fontSize: 15, color: '#9AACB1' }}> Thursday july 2016</Text></Text>
                    </View>
                    <View style={{ backgroundColor: '#F9F9F9', paddingVertical: 15 }}>
                        <Text style={{ color: '#4E6469', fontWeight: '700' }}>How are you felling?</Text>
                        <FlatList data={data}
                            horizontal
                            renderItem={item}
                            keyExtractor={item.item}
                        />
                    </View>
                </View>

                <View style={{ backgroundColor: '#5BD8D6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>View mode history </Text>
                    <Image style={{ tintColor: '#FFFFFF', height: hp('3%'), width: wp('3%'), marginHorizontal: 15 }} source={Imagepath.man} resizeMode='cover' />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: '700' }}>Featured Friends</Text>
                    <TouchableOpacity onPress={() => { setopenImage(!openImage) }}>
                        <Image style={{ height: hp('4%'), width: wp('7%'), }} source={openImage ? Imagepath.rec : Imagepath.button} resizeMode='contain' />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: '700' }}>Featured Friends</Text>
                    <Image style={{ height: hp('4%'), width: wp('7%'), }} source={Imagepath.round} resizeMode='contain' />
                </View>

                <FlatList data={data1} renderItem={item1} keyExtractor={item => item} horizontal />
                <FlatList data={khan}renderItem={mohammad}keyExtractor={item => item} horizontal/>

               <Commanbuttion onPress= {() =>{ navigation.navigate('Home1')}}
               bgC='#5BD8D6'
               title='OK'
               />

            </ScrollView>
        </View>
    )
}
export default Home;
const style = StyleSheet.create({
    button: { borderWidth: 2, borderRadius: 10 * 4 },
    View:{borderRadius: 10 * 4, borderWidth: 2}
})
