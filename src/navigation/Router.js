import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import Home1 from '../screen/Home1';
import Map from '../screen/Map';
import BottamTap from './BottamTap';
import Side from '../screen/Side';
import TopTab from './TopTab';
import Singatur from '../screen/Singatur';
import Modal from '../screen/Modal';
import Lodar from '../screen/Lodar';
import PopOn from '../screen/PopOn';
import Image from '../screen/Image'
import Vidio from '../screen/Vidio';
import Lodar1 from '../screen/Lodar1';
import Saide1 from '../screen/Saide1';
import HomeTab from '../screen/HomeTab';

 const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Vidio {...props} />}>
      <Stack.Screen name="Side" component={Side} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Home1" component={Home1} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="BottamTap" component={BottamTap} />
        <Stack.Screen name="Side" component={Side} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="TopTab" component={TopTab} options={{ headerShown: false }} />
        <Stack.Screen name="Singatur" component={Singatur} options={{ headerShown: false }} />
        <Stack.Screen name="Modal" component={Modal} options={{ headerShown: false }} />
        <Stack.Screen name="Lodar" component={Lodar} options={{ headerShown: false }} />
        <Stack.Screen name="PopOn" component={PopOn} options={{ headerShown: false }} />
        <Stack.Screen name='Image'component={Image}/>
        <Stack.Screen name='Vidio'component={Vidio}/>
        <Stack.Screen name='Saide1' component={Saide1}/>
        <Stack.Screen name='Lodar1' component={Lodar1}/>
        <Stack.Screen name='HomeTab' component={HomeTab} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;