import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Header from './components/HeaderComponent/Header';
import ViewProfiles from './pages/ViewProfiles';
import SearchBox from './components/SearchBoxComponent/SearchBox';


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <ViewProfiles/>
    </div>
  );
}

export default App;
