import React from 'react';
import { View, Text, Image, StyleSheet, Container, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.image} />
                <View style={styles.login} >
                    <Button onPress={() => Actions.Register()} success style={styles.register}><Text style={styles.register_text}> SIGN UP </Text></Button>
                    <View><Text onPress={() => Actions.Login()} style={styles.login_text}> LOGIN </Text></View>
                </View>
            </View>
        )
    }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0.1 * height,
        paddingBottom: 0.1 * height

    },
    image: {
        width: 200,
        height: 400,
        resizeMode: "contain",
        justifyContent: 'center',
        alignItems: 'center',

    },

    register: {
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#1facc0',
        height: 52
    },
    register_text: {
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontSize: 18,
        fontWeight: "600"
    },
    login: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_text: {
        color: '#000',
        width: '100%',
        fontSize: 18,
        fontWeight: "600"

    }

})