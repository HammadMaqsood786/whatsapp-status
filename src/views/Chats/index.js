import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

function Chats() {
    return (
        <>
            <View style={styles.container}  >
                <View style={styles.child} >
                    <View style={styles.subChild} >
                            
                    </View>
                </View>
            </View>
            {/* <Text>This is Chat screen</Text> */}

            {/* <TouchableOpacity style={styles.btbn} onPress={() => navigation.navigate('Calls')} >

                    <Text style={styles.btnText} >Calls</Text>
                </TouchableOpacity> */}
            {/* <Button style={{ width: 40, height: 40, backgroundColor: 'black' }} title="Calls" /> */}
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    child: {
        width: '100%',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'grey',        

    },
    subChild: {
        width: '95%',
        height: '10%',
        backgroundColor: '#404040',
        marginTop: 10,
        borderRadius: 8,
    },
    btn: {
        width: 50,
        height: 30,
        marginTop: 50,
        marginLeft: 60,
        backgroundColor: "blue",
        borderRadius: 5,

    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 5,

    }
});

export default Chats;
