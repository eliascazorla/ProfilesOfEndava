import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import ViewProfiles from './pages/ViewProfiles';
import SharedLayout from './layouts/SharedLayout';

function App() {
  return (
    <div className="App">
      <SharedLayout>
          <ViewProfiles/>
      </SharedLayout>
    </div>
  );
}

export default App;
