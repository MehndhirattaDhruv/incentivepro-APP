import React from 'react';
import { View, Text, Image, StyleSheet, Container, Dimensions, TextInput, AsyncStorage } from 'react-native';
import { Content, Button, Icon, Item, Input, Label, Form } from 'native-base';
import actions from '../../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveObject, getObject, isLoggedIn } from '../../../utils';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
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

    onSubmit = () => {
        actions.login(this.state.user).then(async (res) => {
            console.log(res , "res")
            saveObject(res.response)

            try {
                let userResponse = AsyncStorage.getItem('user').then(res => {
                    Actions.Homepage();
                })
              
            }
            catch (error) {
              
            }

        })
            .catch(err => {
                console.log(err.response.data.response , "error of unsuccessfull login")
            })
    }

    displaydata = async () => {

        try {
            let user = await AsyncStorage.getItem('user')
        }
        catch (error) {

        }
    }

    render() {
        //this.displaydata();
        let { user } = this.state
        return (
            <View style={styles.container}>
                <Icon onPress={() => Actions.pop()} style={styles.backIcon} name='arrow-back' />
                <Text style={styles.welcomeText}>Welcome to </Text>
                <Text style={styles.incentiveText}>Incentive Pro </Text>
                <Text style={styles.loginText}>Log In</Text>
                <Form style={styles.form}>
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
                    <Button onPress={() => this.onSubmit()} success style={styles.loginButton}><Text style={styles.loginTextBottom}> LOG IN </Text></Button>
                </Form>
                <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
                <Text style={styles.signupbutton}>Don't have an accont? <Text onPress={() => Actions.Register()} style={styles.signuptext}>SIGN UP</Text> </Text>
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
    welcomeText: {
        color: "#424242",
        fontSize: 17,
        paddingTop: 0.05 * height, // total height left = 69%
        paddingLeft: 0.05 * width
    },
    incentiveText: {
        fontSize: 32,
        color: "#1facc0",
        paddingLeft: 0.05 * width,
        fontWeight: "600"
    },
    loginText: {
        color: "#231f20",
        fontSize: 30,
        fontWeight: "700",
        paddingTop: 0.04 * height, // total height left = 65%
        paddingLeft: 0.05 * width,

    },
    form: {
        paddingLeft: 0.025 * width,
        paddingTop: 0.04 * height, //total height = 61%,
        paddingRight: 0.025 * width

    },
    input: {
        color: "#222",

    },
    loginButton: {
        marginTop: 0.07 * height,
        backgroundColor: '#1facc0',
        height: 52
    },
    loginTextBottom: {
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontSize: 18,
        fontWeight: "600"
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
        marginTop: 0.03 * height,
        textAlign: "center",
        fontSize: 16
    },
    signuptext: {
        fontWeight: "bold",

    }

})

 export default connect(state => state)(Login);