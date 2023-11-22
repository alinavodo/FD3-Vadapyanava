import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

import './RainbowFrame.css';


class RainbowFrame extends React.Component {
    static propTypes = {colors: PropTypes.array.isRequired}


render(){
    let frame = this.props.colors.reduce((item, color) => {
        return <div style = {{border: color + ' solid 5px',  padding: '5px'}}>{item}</div>
    }, this.props.children);

    return(
        <div className='RainbowFrame'>{frame}</div>
    );
}
}

export default RainbowFrame;