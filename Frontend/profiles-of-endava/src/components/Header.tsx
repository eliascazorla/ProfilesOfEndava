import * as React from 'react';

interface HeaderProps {
    fullName:string
}

function Header (props: HeaderProps) {
  return (
    <div className="header">
      <p>ENDAVA</p>
      <p>{props.fullName}</p>
    </div>
  );
}

export default Header
