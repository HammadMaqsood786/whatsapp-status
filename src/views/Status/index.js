import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Platform } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


let camera;
export default function StatusScreen() {

  const [text, setText] = useState("");

  //This code is for using mobile phone camera
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [currentImage, setCurrentImage] = useState();

  //code for image picker

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState('')

  const pickImage = async () => {
    setShowImages('');
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("This is result", result);


    if (!result.canceled) {
      setImage(result.assets[0].uri);
      images.push(result.assets[0].uri)
      console.log("this is 1 state", image);
      console.log("this is 2 state  ", images);

    }
  };

  //code for image picker

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          console.log(contact);
        }
      }
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>

    );
  }

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5 };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setCurrentImage(data.uri)
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }




  const showStatus = () => {

    setShowImages('show');
   
    setInterval(() => {
      
      console.log("plus takk code pohanch gaya");

    }, 10000);


  }


  return (
    <View style={styles.container}>

      {/* Camera code */}
      {/* <Text>Welcome to react native</Text> */}

      {/* {currentImage ?
        <View style={styles.camera}>
          <Image style={styles.camera} source={{ uri: currentImage }} />
          <Button title="Take new picture" onPress={() => setCurrentImage()} />
        </View>
        :
        <Camera ref={ref => camera = ref} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Image
                style={styles.image}
                source={{ uri: 'https://static.thenounproject.com/png/99970-200.png' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image
                style={styles.image}
                source={{ uri: 'https://expertizo.pk/img/logo-alt.png' }} />
            </TouchableOpacity>

            <View style={styles.button} />
          </View>
        </Camera>
      } */}

      {/* ///=== for image picker ===/// */}

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Upload status" onPress={pickImage} />
        {showImages === 'show' && <Image source={{ uri: images[0] }} style={{ width: 300, height: 200 }} />}

      </View>

      <Button title="show-status" style={styles.statusBtn} onPress={showStatus} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40
  },
  camera: {
    flex: 1,
  },
  button: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 120,
    height: 80
  },
  statusBtn: {
    width: '20%',
    height: '15%',
    marginTop: 150,

  }

});



// import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// function StatusScreen() {
//     return (
//         <>
//             <View >
//                 <Text>This is Status screen</Text>

//                 {/* <TouchableOpacity >

//                     <Text>Calls</Text>
//                 </TouchableOpacity> */}
//             </View>
//             {/* <Button style={{ width: 40, height: 40, backgroundColor: 'black' }} title="Calls" /> */}
//         </>
//     );
// }

// export default StatusScreen;
