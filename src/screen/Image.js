import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput} from 'react-native'
import Imagepath from '../componet/Imagepath';
import Commanbuttion from '../componet/Commanbuttion';



const images = ({navigation}) => {

 const number= useRef(null)
    const one = useRef(null) 
  
    const [pas ,setpas]=useState('')
    const [pas1 ,setpas1]= useState()
    const [pas3, setpas3]= useState('')
    const [play, setPlay]= useState(false)


// const [selected, setSelected]=useState()
//     function onShowPassword(item, index) {
//         let tempArray = [...data1];
//         tempArray[index].isSelect = !tempArray[index].isSelect;
//         setData1(tempArray);
//       }



    return (
<View style= {{ flex: 1,}}>
  <View style={{ backgroundColor:'#85C1E9', flexDirection: 'row',justifyContent: 'space-between', alignItems :'center', borderRadius: 10,marginHorizontal:15, paddingHorizontal: 10}}>
<TextInput
              style={{ width: '75%',  }}
              placeholder="fast name"
            //    value={username}
            //   onChangeText={username => setusername(username)}
              autoCapitalize={'none'}
               secureTextEntry={pas1 ? true : false}  
              ref={number}
              onSubmitEditing={() => { one.current.focus(); }}
              fontSize={17}
              placeholderTextColor="#ffffff"
              fontWeight="700"
        
            />
            <TouchableOpacity onPress={()=>setpas1(!pas1)}>
            <Image source={pas1 ? Imagepath.hidden : Imagepath.view} style={{ height: 30, width: 30}}/>
            </TouchableOpacity>
        </View>

  <View style={{ backgroundColor:'#85C1E9', flexDirection: 'row',justifyContent: 'space-between', alignItems :'center', borderRadius: 10,marginHorizontal:15, paddingHorizontal: 10, marginTop: 10}}>
        
         <TextInput
              style={{ width: '80%' }}
              placeholder="last name"
              // value={username}
              // onChangeText={username => setusername(username)}
              autoCapitalize={'none'}
              secureTextEntry={pas? true : false}
              ref={one}
              onSubmitEditing={() => {
                three.current.focus();
              }}
              fontSize={17}
              placeholderTextColor="#ffffff"
              fontWeight="700"
              rightIcon={Imagepath.Group}
            />
            <TouchableOpacity onPress={()=>setpas(!pas)}>
            <Image source={ pas ? Imagepath.hidden : Imagepath.view}style={{ height: 30, width: 30}}/>
            </TouchableOpacity>
        </View>

            <View style={{ backgroundColor: '#85C1E9', flexDirection: 'row', alignItems: 'center', borderRadius: 10 , marginHorizontal: 15, paddingVertical: 10, marginTop: 10}}>
              <View style= {{flex: 0.6 , flexDirection: 'row', marginHorizontal: 10, alignItems: 'center'}}>
              <Text>Man</Text>
              <TouchableOpacity onPress={() =>setpas3(!pas3)}>
              <Image source={pas3 ? Imagepath.rec : Imagepath.button} style={{ height: 30, width: 30, left: 7}}resizeMode={'cover'}/>
              </TouchableOpacity>
              </View>
              <View style={{ flex: 0.4,  flexDirection: 'row',justifyContent:'flex-end', alignItems: 'center',marginHorizontal: 10,}}>
              <Text style={{right: 7}}>Women</Text>
              <TouchableOpacity onPress={() =>setpas3(!pas3)}>
              <Image   source={pas3 ? Imagepath.button : Imagepath.rec} style={{ height: 30, width: 30}}esizeMode={'cover'}/>
              </TouchableOpacity>
              </View>
            </View> 

            <Commanbuttion onPress={()=>{navigation.navigate('Vidio')}}
             bgC='skyblue'
            title='SUMIT'
            />


            {/* <VideoPlayer
    video={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
    videoWidth={1600}
    videoHeight={900}
    onStart={()=> setPlay(true)}
    thumbnail={{ uri: 'https://www.forensicrisk.com/wp-content/uploads/2022/01/JNorden-Web.jpg' }}
/>  */}
            
            </View>

    )
}
export default images;



















// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, ScrollView, FlatList, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { create } from 'react-test-renderer';
// import Button from '../commpont/Button';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

// const Splash1 = ({ navigation }) => {
//   const number = useRef(null);
//   const two = useRef(null);
//   const three = useRef(null);

//   // const [pas, setpas] = useState('');
//   const [pas1, setpas1] = useState('');
//   const [pas2, setpas2] = useState('');
//   const [pas3, setpas3] = useState('');
//   const [key, setkey] = useState('');
//   const [key1, setkey1] = useState('');
//   const [key2, setkey2] = useState('');

//   const [selected, setSelected] = useState('');
//   const [selected1, setSelected1] = useState('');

//   const [data1, setData1] = useState([
//     { title: 'Femal', key: '226' },
//     { title: 'meil', key: '227' },

//   ]);

//   const onClick = (item, index) => {
//     setSelected(index);
//     // alert(item.title)
//   };


//   function onShowPassword(item, index) {
//     let tempArray = [...data1];
//     tempArray[index].isSelect = !tempArray[index].isSelect;
//     setData1(tempArray);
//   }

//   const item1 = ({ item, index }) => (
//     <View key={item.key} style={styles.inputtextview}>
//       <TextInput
//         style={{ width: '90%' }}
//         placeholder={item.title}
//         autoCapitalize={'none'}
//         secureTextEntry={item.isSelect ? true : false}
//         onSubmitEditing={() => {
//           number.current.focus();
//         }}
//         fontSize={17}
//         placeholderTextColor="#ffffff"
//         fontWeight="700"
//       />

//       <View key={item.key}>
//         <TouchableOpacity onPress={() => onShowPassword(item, index)}>
//           <Image
//             style={{
//               height: 30,
//               width: 30,
//                tintColor:setSelected === index ? '#ffffff' : '#000',
//             }}
//             source={
//                item.isSelect 
//               ? require('../images/view.png')
//                 : require('../images/hidden.png')
//             }
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   const data = [
//     { id: '1', title: 'Femal', key: '226' },
//     { id: '2', title: 'meil', key: '227' },
//     { id: '3', title: 'meil', key: '228' },
//   ];

//   const item = ({ item, index }) => (
//     <TouchableOpacity
//       onPress={() => onClick(item, index)}
//       style={{
//         backgroundColor: selected == index ? '#A6A6' : '#666',
//         padding: selected == index ? 20 : 10,
//         marginTop: 15,
//         borderRadius: 8,
//         width: selected == index ? '40%' : '80%',
//         alignSelf: selected == index ? 'auto' : 'flex-end',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}>
//       <Text style={{
//         color: selected == index ? '#a22' : '#fff',
//         fontSize: 18, fontWeight: 'bold',
//       }}>  {item.title}</Text>
//       <TouchableOpacity onPress={() => setkey(index)}>
//         <Image style={{
//           height: 20, width: 20,
//         tintColor: selected == index ? 'red' : 'pink'
          
//         }}
//           source={
//             key == index
//               ? require('../images/button.png')
//               : require('../images/rec.png')} />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.comment}>
//       <ScrollView>
//         <View key={'880'}
//           style={{
//             flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15,
//           }}>

//           <AnimatedCircularProgress
//             size={80}
//             width={10}
//             fill={10}
//             tintColor="#00e0ff"
//             backgroundColor="#3d5875"
//             backgroundWidth={'10'}
//             lineCap='square'>
//             {fill => <Text>{'30'}</Text>}
//           </AnimatedCircularProgress>
//           <View key={'881'} style={styles.fromview}>
//             <Text style={styles.textview}> FORMS</Text>
//           </View>
//           <AnimatedCircularProgress
//             size={80}
//             width={10}
//             fill={10}
//             tintColor="#00e0ff"
//             backgroundColor="#3d5875"
//             backgroundWidth={'10'}
//             lineCap="square">
//             {fill => <Text>{'30'}</Text>}
//           </AnimatedCircularProgress>
//         </View>

//         <FlatList
//           data={data1}
//           renderItem={item1}
//           keyExtractor={item => item}
//           showsHorizontalScrollIndicator={true}
//         />
//         <View key={'882'} style={styles.Buttonview}>
//           <Text style={styles.textstyle}>Mali</Text>
//           <TouchableOpacity
//             onPress={() => setkey1(!key1)}
//             style={{ flex: 0.15, alignItems: 'flex-end',  }}>
//             <Image
//               style={{
//                 height: 20,
//                 width: 20,
//                 tintColor: selected1 ? 'red' : 'red',
//               }}
//               source={
//                 key1
//                   ? require('../images/button.png')
//                   : require('../images/rec.png')
//               }
//             />
//           </TouchableOpacity>
//           <View key={'883'} style={{ flex: 0.68, alignItems: 'flex-end' }}>
//             <Text style={styles.textstyle}>femil</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => setkey1(!key1)}
//             style={{ flex: 0.15, alignItems: 'flex-end' }}>
//             <Image
//               style={{ height: 20, width: 20, tintColor: selected1 ? 'red' : 'red' }}
//               source={
//                 key1
//                   ? require('../images/rec.png')
//                   : require('../images/button.png')
//               }
//             />
//           </TouchableOpacity>
//         </View>
//         <View
//           key={'884'}
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 20,
//           }}>
//           <View style={styles.inputview}>
//             <TextInput
//               style={{ width: 100 }}
//               placeholder="fast name"
//               // value={username}
//               // onChangeText={username => setusername(username)}
//               autoCapitalize={'none'}
//               secureTextEntry={pas1 ? true : false}
//               ref={number}
//               onSubmitEditing={() => {
//                 two.current.focus();
//               }}
//               fontSize={17}
//               placeholderTextColor="#ffffff"
//               fontWeight="700"
//             />
//             <TouchableOpacity onPress={() => setpas1(!pas1)}>
//               <Image
//                 style={styles.Imageinput}
//                 source={
//                   pas1
//                     ? require('../images/view.png')
//                     : require('../images/hidden.png')
//                 }
//               />
//             </TouchableOpacity>
//           </View>
//           <View key={'885'} style={styles.inputview}>
//             <TextInput
//               style={{ width: 100 }}
//               placeholder="last name"
//               // value={username}
//               // onChangeText={username => setusername(username)}
//               autoCapitalize={'none'}
//               secureTextEntry={pas3 ? true : false}
//               ref={two}
//               onSubmitEditing={() => {
//                 three.current.focus();
//               }}
//               fontSize={17}
//               placeholderTextColor="#ffffff"
//               fontWeight="700"
//             />
//             <TouchableOpacity onPress={() => setpas3(!pas3)}>
//               <Image
//                 style={styles.Imageinput}
//                 source={
//                   pas3
//                     ? require('../images/view.png')
//                     : require('../images/hidden.png')
//                 }
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View key={'886'} style={{ alignItems: 'center', marginTop: 20 }}>
//           <View
//             style={{
//               backgroundColor: '#5DADE2',
//               borderRadius: 10,
//               width: '45%',
//               flexDirection: 'row',
//               padding: 10,
//               paddingVertical: 15,
//               alignItems: 'center',
//             }}>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Text style={styles.textstyle}>Boy</Text>
//               <TouchableOpacity
//                 onPress={() => setkey2(!key2)}
//                 style={{ flex: 0.5, alignItems: 'flex-end' }}>
//                 <Image
//                   style={styles.Imageinput}
//                   source={
//                     key2
//                       ? require('../images/button.png')
//                       : require('../images/rec.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Text style={styles.textstyle}>Girl</Text>
//               <TouchableOpacity
//                 onPress={() => setkey2(!key2)}
//                 style={{ flex: 0.5, alignItems: 'flex-end' }}>
//                 <Image
//                   style={styles.Imageinput}
//                   source={
//                     key2
//                       ? require('../images/rec.png')
//                       : require('../images/button.png')
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         <View key={'887'} style={styles.inputtextview}>
//           <TextInput
//             style={{ width: '90%' }}
//             placeholder={'Username'}
//             autoCapitalize={'none'}
//             secureTextEntry={pas2 ? true : false}
//             ref={three}
//             fontSize={17}
//             placeholderTextColor="#ffffff"
//             fontWeight="700"
//           />
//           <TouchableOpacity onPress={() => setpas2(!pas2)}>
//             <Image style={styles.Imageinput} source={pas2 ? require('../images/view.png') : require('../images/hidden.png')} />
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={data}
//           renderItem={item}
//           keyExtractor={item => item}
//           showsHorizontalScrollIndicator={true}
//         />
//         <Button
//           onPress={() => {
//             navigation.navigate('Home');
//           }}
//           bgColor={'red'}
//           fontSize={20}
//           title={'Submit'}
//           color="#ffffff"
//           marginTop={15}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   comment: { flex: 1, paddingHorizontal: 15, backgroundColor: '#AEFED6' },
//   fromview: {},
//   textview: { fontSize: 20, color: 'black', fontWeight: '700' },
//   inputtextview: {
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     backgroundColor: 'pink',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   Imageinput: { height: 20, width: 20 },
//   Buttonview: {
//     flexDirection: 'row',
//     backgroundColor: '#5DADE2',
//     paddingVertical: 10,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   // FlatListview: {  justifyContent: 'space-between', margin: 10 },
//   inputview: {
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     backgroundColor: 'pink',
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '45%',
//     borderRadius: 10,
//   },
//   textstyle: { fontSize: 17, color: '#ffffff', fontWeight: '700' },
// });
// export default Splash1;
