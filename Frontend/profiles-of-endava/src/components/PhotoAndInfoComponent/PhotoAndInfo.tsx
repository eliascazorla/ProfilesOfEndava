import moment from 'moment';
import * as React from 'react';
import "../PhotoAndInfoComponent/PhotoAndInfo.scss"

interface PhotoAndInfoProps {
    image?:string,
    fullName:string,
    bornDate:string,
    tenure:number,
    seniority:string
}

function PhotoAndInfo (props: PhotoAndInfoProps) {
  var bornDateMoment = moment(props.bornDate);
  var actualDate = moment(new Date());
  return (
    <div className="photoAndInfo">
      <img src="https://via.placeholder.com/125X85"/>
      <article>
        <h2>{props.fullName} ({actualDate.diff(bornDateMoment, "y")})</h2>
        <h3>{props.seniority}</h3>
        <h4>Industry Tenure {props.tenure}</h4>
      </article>
    </div>
  );
}

export default PhotoAndInfo