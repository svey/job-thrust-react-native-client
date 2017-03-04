import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ApplicationList from './components/ApplicationList';
import ApplicationCreate from './components/ApplicationCreate';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.applicationCreate()}
            rightTitle="Add"
            key="applications"
            component={ApplicationList}
            title="Applications"
            initial
          />

          <Scene
            // onLeft={() => Actions.applications()}
            // leftTitle="Back"
            key="applicationCreate"
            component={ApplicationCreate}
            title="Create Application"
          />
        </Scene>
      </Router>
  );
};

export default RouterComponent;
