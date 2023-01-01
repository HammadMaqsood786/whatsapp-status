import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Platform } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Navigator from './config/navigation.js';
import TabNavigator from './config/navigation.js';
import DrawerNavigator from './config/navigation.js';



export default function App() {

  return (
    <View style={styles.container}>
      {/* <TabNavigator /> */}
      <Navigator />
      {/* <DrawerNavigator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
