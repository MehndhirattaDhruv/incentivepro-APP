import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterComponent extends PureComponent {
    render() {
        return (
            <Footer>
                <FooterTab
                    style={{ backgroundColor: 'white' }}>
                    <Button>

                        <Image source={require('../../../assets/home_s.png')} style={{
                            height: 25,
                            width: 25
                        }} />

                    </Button>

                    <Button>
                        <Image style={{
                            height: 25,
                            width: 25
                        }} source={require('../../../assets/video_s.png')} />

                    </Button>
                    <Button>
                        <Image style={{
                            height: 25,
                            width: 25
                        }} source={require('../../../assets/settings_s.png')} />

                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

