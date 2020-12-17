import * as React from 'react';
import Header from '../components/HeaderComponent/Header';

interface SharedLayoutProps {
    children: React.ReactNode;
}

function SharedLayout (props: SharedLayoutProps) {
  return (
    <>
      <Header/>
      <main>
          {props.children}
      </main>
    </>
  );
}

export default SharedLayout