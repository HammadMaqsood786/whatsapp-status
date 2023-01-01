import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

function Header () {
    return (
        <View style={styles.container}>
        <Text>This is Header screen</Text>

        {/* <TouchableOpacity >

            <Text>Calls</Text>
        </TouchableOpacity> */}
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});

export default Header;