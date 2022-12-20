import React from 'react';
import { Text, View,  } from 'react-native';
 import Video from 'react-native-video';
import VideoPlayer from "react-native-video-player";
import Commanbuttion from '../componet/Commanbuttion';
const Vidoes = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            
            <VideoPlayer
                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                videoWidth={1600}
                videoHeight={1200}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
            <Commanbuttion onPress={()=>{navigation . navigate('MyDrawer')}} 
            title='OK'
            bgC='red'/>
        </View>
    );
}

export default Vidoes;
