import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Modal from '../screen/Modal';
import Singatur from '../screen/Singatur';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottamTap =() => {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false ,
        tabBarStyle: { height: ("7%"), backgroundColor: '#82E0AA' },
        tabBarHideOnKeyboard: false,
    }}
   
    tabBarOptions={{ 
        activeTintColor: '#000000',
        inactiveTintColor: '#0000FF',
        labelStyle: {
            fontSize: 13,

          },
    }}>
      <Tab.Screen name="Modal" component={Modal} />
      <Tab.Screen name="Singatur" component={Singatur} />
    </Tab.Navigator>
  );
}

export default BottamTap;
