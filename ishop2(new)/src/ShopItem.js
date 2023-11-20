import React from 'react';
import PropTypes from 'prop-types';

import './ShopItem.css';

class ShopItem extends React.Component {
    static propTypes = {
        numberGood: PropTypes.number.isRequired,           
        data: PropTypes.shape({                      
            code: PropTypes.number.isRequired,        
            name: PropTypes.string.isRequired, 
            quantity: PropTypes.number.isRequired,
            photo: PropTypes.string.isRequired, 
            price: PropTypes.number.isRequired,
        }),
        disableButtons: PropTypes.bool.isRequired, 

        cbSelectGood: PropTypes.func.isRequired,  
        cbDeleteGood: PropTypes.func.isRequired,
        cbEditGood: PropTypes.func.isRequired,
       
        goodClassName: PropTypes.string,
    };

    selectedGood = (eo) => {
        eo.stopPropagation();  
        if(!this.props.disableButtons){
        this.props.cbSelectGood(this.props.data)
        }
    };

    editItem = (eo) => {
        eo.stopPropagation();                  
        this.props.cbEditGood(this.props.data);
    };

    deletedItem = (eo) => {
        eo.stopPropagation();                  
        this.props.cbDeleteGood(this.props.data.code);
    };


    render() {
        let good = this.props.data;
        return  (
        <tr key = {good.code} 
            className = {this.props.goodClassName}
            onClick = {this.selectedGood}>
            <td className = 'Goods'>{this.props.numberGood}</td>
            <td className = 'Goods'>{good.name}</td>
            <td className = 'Goods'>
                <img src={good.photo} alt={good.name}></img></td>
            <td className = 'Goods'>{good.price} €</td>
            <td className= 'Goods'>{good.quantity} kg</td>
            <td className = 'Goods'>
                <input  type = 'button' className = 'button' disabled={this.props.disableButtons} onClick = {this.editItem} value = 'edit'/>
                <input  type = 'button' className = 'button' disabled={this.props.disableButtons} onClick = {this.deletedItem} value = 'X'/>
            </td> 
            </tr>
        )
    }
}

export default ShopItem;
