// import React from 'react';
// import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';

// import './BR2JSX.css';


// class RainbowFrame extends React.Component {
//     static propTypes = {colors: PropTypes.array.isRequired}


// render(){
//     let frame = this.props.colors.reduce((item, color) => {
//         return <div style = {{border: color + ' solid 5px',  padding: '5px'}}>{item}</div>
//     }, this.props.children);

//     return(
//         <div className='RainbowFrame'>{frame}</div>
//     );
// }
// }

// export default BR2JSX;


// import React from 'react';
// import PropTypes from 'prop-types';

// class BR2JSX extends React.Component {

//     static propTypes = {
//         text: PropTypes.string,
//     };

//     render() {
//         const reg = /<br\s?\/?>/;
//         const textArray = this.props.text.split(reg);

//         const text = textArray.map((item, num) => {
//             return (
//                 <React.Fragment key={num}>
//                     {num !== 0 && <br />} {item}
//                 </React.Fragment>
//             )
//         })

//         return (
//             <div className='br2jsx'>
//                 {text}
//             </div>
//         );
//     }
// }

// export default BR2JSX;


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