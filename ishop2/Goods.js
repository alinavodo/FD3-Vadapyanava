var Goods = React.createClass({

    displayName: 'Goods',

    propTypes: {
        goods:  React.PropTypes.array.isRequired,
        selectGoodNumb: React.PropTypes.number,  
        selectGood: React.PropTypes.string,    
        class: React.PropTypes.string,

    },

    getInitialState: function() {
        return{
            goods: this.props.goods.slice(),            
            selectGoodNumb: null,                       
            selectGood: "selectGood",   
            class: "Good"       
            };
     },


    selectGood: function(goodKey) {
        this.setState({selectGoodNumb: goodKey });       
    },


    deleteGood: function(goodKey) {
        var question = confirm("Точно удалить?");
        if (question) {
            var newGoods = this.state.goods.filter(e => e.code !== goodKey);  
                this.setState({goods: newGoods})
            }
    },


    render: function(){
        var list = this.state.goods.map(e =>{
            return React.createElement(ListShop, {
                key: e.code,
                goods: e,
                cbSelectGood: this.selectGood,
                cbDeleteGood: this.deleteGood,
                goodClass: (this.state.selectGoodNumb === e.code)?this.state.selectGood:this.state.class
            })
        });

        return React.DOM.div({className:'Ishop'},
            React.createElement(TextShop, {textName: this.props.textName}), 
            React.createElement("table", null,
            React.createElement("tbody", null,
            React.createElement("tr", null,),list)
            ))
        },
    });


