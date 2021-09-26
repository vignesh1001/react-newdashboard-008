/** @format */

import './App.css';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/MainLayout/index';
import AppWrapper from './components/AppWrapper';
import LinearProgress from './components/LinearProgress';

import { Provider, Context } from './context/store';
import Leads from './pages/Leads';
import themes from './themes';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  const { state, dispatch } = useContext(Context);
  const customization = useSelector((state) => state.customization);

  return (
    <Provider>
      <ThemeProvider theme={themes(customization)}>
        {/* <Router> */}
        <AppWrapper>
          <Route exact path={['/', '/leads']}>
            <Dashboard
            // copyright={<Copyright sx={{ pt: 4 }} />}
            // header={<Header />}
            >
              <Switch>
                <Route exact path="/leads">
                  <Leads />
                </Route>
              </Switch>
            </Dashboard>
          </Route>
          {/*<Route exact path={["/", "/login"]}>*/}
          {/*	<Login />*/}
          {/*</Route>*/}
        </AppWrapper>
        {/* </Router> */}
        <LinearProgress />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
