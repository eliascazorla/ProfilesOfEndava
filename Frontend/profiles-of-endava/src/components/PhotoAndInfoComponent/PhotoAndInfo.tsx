import * as React from 'react';
import "../PhotoAndInfoComponent/PhotoAndInfo.scss"

interface PhotoAndInfoProps {
    image?:string,
    fullName:string,
    tenure:number,
    seniority:string
}

function PhotoAndInfo (props: PhotoAndInfoProps) {
  return (
    <div className="photoAndInfo">
      <img src="https://via.placeholder.com/125X85"/>
      <article>
        <h2>{props.fullName}</h2>
        <h3>{props.seniority}</h3>
        <h4>{props.tenure}</h4>
      </article>
    </div>
  );
}

export default PhotoAndInfo