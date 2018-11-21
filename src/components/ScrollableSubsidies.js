import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Footer, FooterTab, Button, Icon, Card, CardItem, Body , Input  , Item } from 'native-base';
import actions from '../actions'
import { connect } from 'react-redux';

class ScrollableSubsidies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }
    componentDidMount() {
        actions.getSubsidies({ ...this.props.data, zone: '', industry: '', state: '', city: '', block: '', type: '' }).then(res => {
            // console.log(res , "res of subsidies")
        }).catch(err => {
            console.log(err, "err of subsidy APi")
        })
    }

    render() {
        const {
        data = {}, 
        searchTerm=''
        } = this.props;

        let { subsidies = [] } = this.props.subsidies;

        return (
            <ScrollView style={styles.scrollableComponent}>
                <Card style={styles.Componentcard}>
                    <Text style={styles.heading}>List of subsidies on the basis of your preferences </Text>
                    <Item rounded style={styles.searchbar}>
                        <Icon active name='search' />
                        <Input
                            style={styles.searchInput}
                            placeholder='Search'
                            value={searchTerm}
                        />
                    </Item>
                {
                    subsidies && subsidies.length ? subsidies.map((item, index) => <Card key={index} style={styles.subsidycard}>
                            <CardItem style={{ justifyContent:"space-between", width:"100%", display: "flex",  paddingRight: 15}}  header>
                             <React.Fragment>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Icon style={styles.loveicon} active name='heart'/>
                                </React.Fragment>  
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={styles.description}>
                                        {item.excerpt.length > 300 ? item.excerpt.substr(0, 330).trim() + '...' : item.excerpt}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem style={styles.subsidyFooter} footer>
                                <Text style={styles.applynow}>APPLY NOW</Text>
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
        paddingBottom:0.03*height,
        backgroundColor:"#fbfbfb"
    },
    heading:{
        fontSize:17,
        fontWeight:"500",
        paddingLeft:0.05*width
    },
    searchbar:{
      marginTop:15,
      marginBottom:10,
      marginLeft:0.05*width,
      marginRight:0.05*width,
      height:0.055*height,
      backgroundColor:"#f5f5f5"
    },
    subsidycard:{
        marginTop:0.02*height,
        backgroundColor:"#fff",
        marginBottom:0.02*height,
        marginLeft:0.03*width,
        marginRight:0.03*width

    },
    subsidyItemFooter:{
        alignContent:'flex-end',
        justifyContent:"flex-end"
    },
    title:{
        color:"#474747",
        fontSize:16,
        fontWeight:"700",
        fontStyle:"normal",
        width: "90%",
        textShadowColor:"transparent",
    },
    loveicon:{
        textAlign:"center",
        width: "10%",
    },
    description:{
        color:"#767676",
        fontSize:14,
        fontWeight:"400"

    },
    subsidyFooter:{
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
    applynow:{
        color:"#1facc0",
        textDecorationLine:"underline",
        fontWeight:"700"
    }
})

export default connect(state => state)(ScrollableSubsidies)