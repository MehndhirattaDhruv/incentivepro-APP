import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { Router, Scene, Actions, Lightbox, Modal } from 'react-native-router-flux';
import { Welcome, Login, Register , Homepage } from './containers';
 import { FooterComponent } from './components'
import { isLoggedIn } from '../utils';

export default class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null
    }
  }

  componentDidMount() {
    isLoggedIn().then(res => {

      this.setState({
        loading: false,
        user: JSON.parse(res)
      }, () => this.state.user && this.state.user.access_token ? Actions.Homepage() : null);
    })
      .catch(err => {
        this.setState({ loading: false });
      })
  }

  render() {

    const { user, loading } = this.state;
    return (
      loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Router>
        <Scene key="root">
          <Scene exact path="/" key="Welcome" initial={true} component={Welcome} hideNavBar={true} />
          <Scene component={Login} key="Login" hideNavBar={true} />
          <Scene component={Register} key="Register" hideNavBar={true} />
          <Scene tabs key="tabs" swipeEnabled={false} tabBarPosition={'bottom'} tabBarComponent={FooterComponent}>
            <Scene key="Homepage" component={Homepage} title="Homepage" hideNavBar={true} />
          </Scene>


        </Scene>
      </Router>
    )
  }
}
class NotFound extends React.Component {

  render() {

    return (
      <View>
        <Text>Under Construction</Text>
        <Button onPress={() => Actions.Login()}><Text>Go Back</Text></Button>
      </View>
    )
  }
}

