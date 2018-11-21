import React from 'react';
import { View, Text, Image, StyleSheet, Container, Dimensions, TextInput } from 'react-native';
import { Content, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                email: '',
                password: ''
            }
        }
    }

    onChangeUser = (key, val) => {
        let { user } = this.state;
        user[key] = val;

        this.setState({ user });
    }

    render() {
        let { user } = this.state
        return (
            <View style={styles.container}>
                <Icon onPress={() => Actions.pop()} style={styles.backIcon} name='arrow-back' />
                <Text style={styles.loginText}>Sign Up</Text>
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label style={styles.label}>Username</Label>
                        <Input
                            style={styles.input}
                            value={user.username}
                            onChangeText={(text) => this.onChangeUser('username', text)}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Email</Label>
                        <Input
                            style={styles.input}
                            value={user.email}
                            onChangeText={(text) => this.onChangeUser('email', text)}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label style={styles.label}>Password</Label>
                        <Input
                            style={styles.input}
                            secureTextEntry
                            value={user.password}
                            onChangeText={(text) => this.onChangeUser('password', text)}
                        />
                    </Item>

                    <Button block success style={styles.loginButton}><Text style={styles.signuptext} >SIGN UP </Text></Button>
                    <Button block success style={styles.googleButton}><Text style={styles.signuptext} >SIGN UP WITH GOOGLE</Text></Button>
                    <Text style={styles.signupbutton}>Already have an accont? <Text onPress={() => Actions.Login()} style={styles.loginsupporttext}>LOGIN</Text> </Text>
                </Form>
            </View>
        )
    }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0.2 * height //total height left =80%
    },
    backIcon: {
        paddingTop: 0.06 * height,  //total height left = 74%
        paddingLeft: 0.04 * width,
        color: '#16a5b7'
    },
    loginText: {
        color: "#231f20",
        fontSize: 30,
        fontWeight: "700",
        paddingTop: 0.04 * height, // total height left = 65%
        paddingLeft: 0.05 * width,
        width: '100%',

    },
    form: {
        paddingLeft: 0.025 * width,
        paddingTop: 0.04 * height, //total height = 61%,
        paddingRight: 0.025 * width,



    },
    input: {
        color: "#222",

    },
    loginButton: {
        marginTop: 0.07 * height,
        backgroundColor: '#1facc0',
        height: 52
    },
    googleButton: {
        marginTop: 0.03 * height,
        backgroundColor: '#dc4e41',
        height: 52
    },

    label: {
        color: "#222",
    },
    forgotpasswordText: {
        color: "#424242",
        marginTop: 0.03 * height,
        textAlign: "center",
        fontSize: 16
    },
    signupbutton: {
        color: "#424242",
        marginTop: 0.05 * height,
        textAlign: "center",
        fontSize: 16
    },

    signuptext: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
    },
    loginsupporttext: {
        fontWeight: "bold",
    }

})

