import React from 'react';
import PropTypes from 'prop-types';

import './CardEdit.css';

class CardEdit extends React.Component {
    static propTypes = {
        good: PropTypes.shape({                      
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,   
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            photo: PropTypes.string.isRequired,
        }),
        workMode:PropTypes.number.isRequired,  //1 - edit, 2 - add, 3 - watch
        cbDisableButtons: PropTypes.func.isRequired,
        cbEditGoodList:PropTypes.func.isRequired,
        cbAddGoodList:PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
        cbNewCode: PropTypes.func.isRequired,
    };

    state = {
        good: {
            code: this.props.good?this.props.good.code:this.props.newGoodCode,     
            name: this.props.good?this.props.good.name:null,            
            price: this.props.good?this.props.good.price:null,               
            quantity: this.props.good?this.props.good.quantity:null,
            photo: this.props.good?this.props.good.photo:null,
        },
        nameValid: this.props.good?!!this.props.good.name:false,
        quantityValid: this.props.good?!!this.props.good.quantity:false,
        priceValid: this.props.good?!!this.props.good.price:false,
        photoValid: this.props.good?!!this.props.good.photo:false,


        codeValid: this.props.good?!!this.props.good.code:false,

        formValid: false,
        isDisabled: true,  
     };

     createInput = (name, placeholder, value, type, nameValid) => {
        return (
        <p className = 'line' key={name}>
            <input  className = 'inputList'  type = {type} placeholder = {placeholder} name = {name} defaultValue = {value} onChange = {(type==='number')? this.numberChange : this.stringChange}/>
            <span className = 'error'>{ (nameValid) ? ' ' : 'Enter the ' + (name)} </span>
        </p>)
    };

    stringChange = (eo) => {
        eo.stopPropagation();
        const NAME = eo.target.name;
        const VALUE = eo.target.value;
        this.setState({good : {...this.state.good, [NAME]:VALUE}},() => { this.validateFields(NAME, VALUE)})
        this.props.cbDisableButtons(true);                
    };

    numberChange = (eo) => {
        eo.stopPropagation();
        const NAME = eo.target.name;
        const VALUE = eo.target.value;
        this.setState({good : {...this.state.good, [NAME]:parseFloat(VALUE)}},() => { this.validateFields(NAME, VALUE)})
        this.props.cbDisableButtons(true);                       
    };

    save = (eo) =>{
        eo.stopPropagation();
        if(this.props.workMode === 1){
            this.props.cbEditGoodList(this.state.good);
            this.props.cbNewCode(this.props.newGoodCode + 1)
        }   
        else{
            this.props.cbNewCode(this.props.newGoodCode + 1);
            this.props.cbAddGoodList(this.state.good);
        }
        this.props.cbDisableButtons(false);
    };


    cancel = (eo) =>{
        eo.stopPropagation();
        this.props.cbCancel(this.state.good);
        this.setState({ formValid: false});
        this.props.cbDisableButtons(false);
    };

    validateFields = (name, value) =>{
  
        let nameValid = this.state.nameValid;
        let quantityValid = this.state.quantityValid;
        let priceValid = this.state.priceValid;
        let photoValid = this.state.photoValid;

        let codeValid = this.state.codeValid;

        switch(name) {
            case 'code':
                codeValid = (value > 10) ;
                break;
            case 'name':
                nameValid = (value.length > 3);
                break;
            case 'quantity':
                quantityValid = (value >0 );
                break;
            case 'price':
                priceValid = (value > 0);
                break;
            case 'photo':
                photoValid = (value);
                break;
        }
        this.setState({
            nameValid: nameValid,
            quantityValid: quantityValid,
            priceValid:priceValid,
            photoValid:photoValid,
            codeValid:codeValid
        }, this.validateForm);
    };

validateForm() {
    this.setState({formValid: this.state.nameValid &&
            this.state.quantityValid&&
            this.state.priceValid&&
            this.state.photoValid&&this.state.codeValid
    });
}
    
    render(){

        let array=[];
            if(this.props.workMode === 1) {
                let goodData = this.props.good;
                array.push(
                    <div key = {goodData.name}>
                    <p key = 'title1' className = 'editTitle'>Edit good</p>
                    <form key = 'formList1' name = 'formList'>
                            <img src = {goodData.photo} alt={goodData.name}/>
                            {this.createInput('name', 'name', goodData.name, 'text', this.state.nameValid)}
                            {this.createInput('price','price', goodData.price, 'number', this.state.priceValid)}
                            {this.createInput('quantity','quantity', goodData.quantity, 'number', this.state.quantityValid)}
                            <input type='button' value='cancel' onClick = {this.cancel}/>
                            <input type='button' value='save' onClick = {this.save} disabled={!this.state.formValid}/>
                    </form>
                    </div>
                )
            }

            if(this.props.workMode === 2) {
                let newCode = Math.floor(Math.random() * 1000);
                array.push(
                    <div key='wM2' >
                    <p key = 'title2' className = 'editTitle'>Add good</p>
                    <form key = 'formList2' name = 'formList' >
                        {this.createInput('code',(newCode), '', 'number', this.state.codeValid)}
                        {this.createInput('photo', 'photo(url)', '', 'url', this.state.photoValid)}
                        {this.createInput('name', 'name', '', 'text', this.state.nameValid)}
                        {this.createInput('price', 'price', '', 'number', this.state.priceValid)}
                        {this.createInput('quantity', 'quantity', '', 'number', this.state.quantityValid)}
                        <input type='button' value='cancel' onClick = {this.cancel}/>
                        <input type='button' value='save' onClick = {this.save} disabled={!this.state.formValid}/>
                    </form>
                    </div>
                    
                )
            }

            if(this.props.workMode === 3) {
                let goodData = this.props.good;
                array.push(
                    <div key = {this.props.good.name}> 
                    <h2 key = 'title3' className = 'editTitle'>{this.props.good.name}</h2>
                    <img  src = {goodData.photo} alt='Not foto'/>
                    <div className = 'listPrice'>Price: {goodData.price} $</div>
                    <div className = 'listCount'>Count: {goodData.quantity}</div>
                    </div> 

                )
            }

        return (
            <>
                {array}
            </>
        )}
}

export default CardEdit;