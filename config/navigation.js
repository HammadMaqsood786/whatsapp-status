import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chats from '../src/views/Chats/index';
import CallsScreen from '../src/views/Calls';
import StatusScreen from '../src/views/Status';
import Header from '../src/views/Header';
import { Stylesheet, BlurView, HeaderBackground } from 'react-native'

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function Navigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator >
            
                <Stack.Screen name="WhatsApp" component={TabNavigator} options={{
                    headerTransparent: false,
                    
                }} />

                {/* <Stack.Screen name="Status" component={StatusScreen} />
                <Stack.Screen name="Calls" component={CallsScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {

    return (

        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Calls" component={CallsScreen} />
        </Tab.Navigator>

    );
}

function DrawerNavigator() {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="Chats" component={Chats} />
            <Drawer.Screen name="Status" component={StatusScreen} />
        </Drawer.Navigator>

    );
}

export default Navigator;