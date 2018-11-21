import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, AsyncStorage , Card } from 'react-native';
import { Content, Button, Icon, Item, Input, Label, Form, Header, Container, Title, Body, Right, Center, Left } from 'native-base';
import { logout } from '../../utils'
import { Font, AppLoading } from "expo";
import { Actions } from 'react-native-router-flux';
import { ScrollableSubsidies } from '../components';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            loading: true
         };
    }

    onLogout = () => {
        logout();
        Actions.Login()

    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });

    }

    render() {
        if (this.state.loading) {
            return (
                <View>
                    <AppLoading />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Header style={{ backgroundColor: '#1facc0', justifyContent: "flex-start", height: 0.2 * height, justifyContent: "center", alignItems: "center" }} >
                    <Body style={styles.body}>
                        <Title style={styles.titlesubsidies}>My subsidies</Title>
                    </Body>
                </Header>
                     <ScrollableSubsidies />
                <Button success onPress={this.onLogout}><Text>Logout</Text></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //paddingBottom: 0.2 * height //total height left =80%        
    },
    body: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: "center",
    },
    titlesubsidies: {
        color: "#fff",
        fontSize: 18
    }
})

