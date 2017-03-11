import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ApplicationList from './components/ApplicationList';
import ApplicationCreate from './components/ApplicationCreate';
import Search from './components/Search';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
        <Scene
          key="signIn"
          title="Job Thrust"
          titleStyle={{ color: '#FFF' }}
          component={LoginForm}
          navigationBarStyle={{ backgroundColor: '#1e2226' }}
          type="reset"
          initial
        />

        <Scene
          key="applications"
          title="Manage Applications"
          titleStyle={{ color: '#FFF' }}
          component={ApplicationList}
          navigationBarStyle={{ backgroundColor: '#1e2226' }}
          rightTitle="Search"
          onRight={() => Actions.search()}
          leftTitle="Logout"
          onLeft={() => Actions.signIn()}
          type="reset"
        />

        <Scene
          key="applicationCreate"
          title="Add Application"
          titleStyle={{ color: '#FFF' }}
          component={ApplicationCreate}
          navigationBarStyle={{ backgroundColor: '#1e2226' }}
          leftTitle="Apps"
          onLeft={() => Actions.applications()}
          type="reset"
        />

        <Scene
          key="search"
          title="Search Jobs"
          titleStyle={{ color: '#FFF' }}
          component={Search}
          navigationBarStyle={{ backgroundColor: '#1e2226' }}
          leftTitle="Apps"
          onLeft={() => Actions.applications()}
          type="reset"
        />
    </Router>
  );
};

export default RouterComponent;
