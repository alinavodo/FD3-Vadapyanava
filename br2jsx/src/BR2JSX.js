
import React from 'react';

import './BR2JSX.css';

function BR2JSX (props) {
  let reg = /<br\s*\/*>/;
  let textArr = props.text.split(reg);
  let text =[];
  for (let i = 0; i < textArr.length; i++){
    text.push(textArr[i]);
    if(i < textArr.length -1){
        text.push(<br key={i}></br>);
    }
  }
  return(
    <div className="BR2JSX">{text}</div>
  );
}

export default BR2JSX;