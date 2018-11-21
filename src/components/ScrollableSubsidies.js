import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Footer, FooterTab, Button, Icon, Card, CardItem, Body , Input } from 'native-base';
import actions from '../actions'
import { connect } from 'react-redux';

class ScrollableSubsidies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                start: 10,
                limit: 5,
                zone: [],
                state: [],
                city: [],
                industry: [],
                term: "",
                block: '',
                subindustry: "",
                scale: "",
                type: ''
            },
            response: []
        }
    }
    componentDidMount() {
        actions.getSubsidies({ ...this.state.data, zone: '', industry: '', state: '', city: '', block: '', type: '' }).then(res => {
            // console.log(res , "res of subsidies")
        }).catch(err => {
            console.log(err, "err of subsidy APi")
        })
    }

    render() {
        let { subsidies = [] } = this.props.subsidies;

        return (
            <ScrollView style={styles.scrollableComponent}>
                <Card style={styles.Componentcard}>
                    <Text style={styles.heading}>List of subsidies on the basis of your preferences </Text>
                {
                    subsidies && subsidies.length ? subsidies.map((item, index) => <Card key={index}>
                        <CardItem header>
                            <Text>{item.title}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    {item.excerpt.length > 300 ? item.excerpt.substr(0, 330).trim() + '...' : item.excerpt}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                    ) : null
                }
                </Card>
            </ScrollView>
        );
    }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollableComponent: {
        height: 0.7 * height
    },
    Componentcard:{
        marginLeft:0.05*width,
        marginRight:0.05*width,
        paddingTop:0.03*height,
        paddingBottom:0.03*height
    },
    heading:{
        fontSize:17,
        fontWeight:"600",
        paddingLeft:0.05*width
    }
})

export default connect(state => state)(ScrollableSubsidies)