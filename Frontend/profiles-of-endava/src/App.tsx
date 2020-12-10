import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Header from './components/HeaderComponent/Header';
import ViewProfiles from './pages/ViewProfiles';


function App() {
  return (
    <div className="App">
      <Header/>
      <ViewProfiles/>
    </div>
  );
}

export default App;
