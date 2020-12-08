import * as React from 'react';

interface PhotoAndInfoProps {
    image?:string,
    fullName:string,
    tenure:number,
    seniority:string
}

function PhotoAndInfo (props: PhotoAndInfoProps) {
  return (
    <div>
      <img src="https://via.placeholder.com/125X85"/>
      <h2>{props.fullName}</h2>
      <h3>{props.seniority}</h3>
      <h4>{props.tenure}</h4>
    </div>
  );
}

export default PhotoAndInfo