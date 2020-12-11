import * as React from 'react';
import Header from '../components/HeaderComponent/Header';
import SearchBox from '../components/SearchBoxComponent/SearchBox';

interface SharedLayoutProps {
    children: React.ReactNode;
}

function SharedLayout (props: SharedLayoutProps) {
  return (
    <>
      <Header/>
      <SearchBox/>
      <main>
          {props.children}
      </main>
    </>
  );
}

export default SharedLayout