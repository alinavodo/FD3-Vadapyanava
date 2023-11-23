 import React from 'react';


let withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {
let frame = colors.reduce((item, color) => {
      return  <div style = {{border: color + ' solid 5px',  padding: '5px'}}>{item}</div>}, 
    <Fragment {...props} ></Fragment>);

    return (
        <div style={{ width: 500, textAlign: 'center'}}>
            {frame}
        </div>
    );
};

export {withRainbowFrame};


