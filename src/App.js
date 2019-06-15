import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import objectives from './objectives';
import experience from './experience';
import education from './education'

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="objectives" component={objectives} title="objectives" initial={true} />
          <Scene key="experience" component={experience} title="experience" />
          <Scene key="education" component={education} title="education" />
        </Scene>
      </Router>
    )
  }
}
