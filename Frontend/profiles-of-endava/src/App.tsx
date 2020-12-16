import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import ViewProfiles from './pages/ViewProfiles';
import SharedLayout from './layouts/SharedLayout';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
import CreateProfile from './pages/CreateProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profiles">
            <SharedLayout>
              <ViewProfiles/>
            </SharedLayout>
          </Route>
          <Route path="/createProfile">
            <SharedLayout>
              <CreateProfile/>
            </SharedLayout>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
