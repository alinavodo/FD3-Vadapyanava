
import React from 'react';
import PropTypes from 'prop-types';

import './Goods.css';


import ShopItem  from './ShopItem';
import CardEdit from './CardEdit';

class Goods extends React.Component {

    static propTypes = {
        startWorkMode: PropTypes.number.isRequired,
        workMode: PropTypes.number,
        goods:  PropTypes.array.isRequired, 
        editGoods: PropTypes.array,    

        selectGoodNumb: PropTypes.number,         
        selectGoodClassName: PropTypes.string,    
        notSelectGoodClass: PropTypes.string, 
    };

    state = {
            workMode: this.props.startWorkMode,
            goods: this.props.goods.slice(),            
            selectGoodNumb: null,                       
            selectGoodClassName: "selectGood",          
            newGoodCode: 100,
            editGoods: null,
            disableButtons:false,
    };

    cancel = () =>{
        this.setState({workMode: 0});              
    };

    selectGood = (good) => {
        this.setState({selectGoodNumb: good.code, workMode: 3, editGoods: good});
    };
        

    deleteGood = (goodCode) => {
        let question = confirm('Delete?');
        if (question) {
            let newGoods = this.state.goods.filter(e => e.code !== goodCode);  
                this.setState({workMode: 0, goods: newGoods, editGoods: null});
        }
    };

    editGood = (good) => {
        this.setState({ workMode: 1, editGoods: good, selectGoodNumb: null})
    };

    addGood= (eo) => {
        console.log('work')
        eo.preventDefault();
        this.setState({workMode: 2, disableButtons: false,selectGoodNumb: null})
    };

    newGoodCodeChange = (code) => {
        this.setState ({ newGoodCode: code })
    };


    disableButtons = (value) =>{
        this.setState({disableButtons: value})
    };

    editGoodList = (good) => {
        let newGoods = this.state.goods.map((e) => {
            return e.code === good.code ? good : e;  
        });
        this.setState({goods: newGoods, workMode: 0});
    };

    addGoodsList = (good) => {
        this.setState({  goods:  [...this.state.goods, good], workMode: 0});
    };

    render() {
        let goods = [];

        let list = this.state.goods.map((e, i) =>
            <ShopItem   key = {e.code}
                        code = {e.code}
                        numberGood = {i+1}
                        disableButtons = {this.state.disableButtons}
                        data = {e}
                        cbSelectGood = {this.selectGood}
                        cbDeleteGood =  {this.deleteGood}
                        cbEditGood = {this.editGood}
                        goodClassName = {(this.state.selectGoodNumb == e.code) ? this.state.selectGoodClassName: null}        
            />

        );

        goods.push(
        <div key='div_button'>
            <table  key = 'table'>
                <tbody>
                    {list}
                </tbody>
            </table>
            <input key='add_button' className = 'add_button' type='button' onClick = {this.addGood} value ='Add good'/>
        </div>
        ); 
    
        if(this.state.workMode >0){
            goods.push(
                <CardEdit   key = "CardEdit"
                            workMode = {this.state.workMode}
                            good = {this.state.editGoods}
                            cbDisableButtons= {this.disableButtons}
                            newGoodCode = {this.state.newGoodCode}
                            cbEditGoodList = {this.editGoodList}
                            cbAddGoodList = {this.addGoodsList}
                            cbCancel = {this.cancel}
                            cbNewCode = {this.newGoodCodeChange}
                />  
            )
    
        }
            return (
                <>
                    {goods}
                </>
            )
        }
}

export default Goods;