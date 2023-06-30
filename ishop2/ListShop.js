var ListShop = React.createClass({

    displayName: 'ListShop',

    propTypes: {
        goods: React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                photo: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired,   

        }),
        cbSelectGood: React.PropTypes.func.isRequired,
        cbDeleteGood: React.PropTypes.func.isRequired,
        goodClass: React.PropTypes.string.isRequired,
    },

    selectGood: function(EO) {
        this.props.cbSelectGood(this.props.goods.code);
    },

    deleteGood: function(EO) {
        EO.stopPropagation();                   
        this.props.cbDeleteGood(this.props.goods.code);
    },

    render: function(){
        var goods = this.props.goods;
        return React.createElement('tr',{className: this.props.goodClass, onClick: this.selectGood},
            React.createElement('td',{className:'Goods'}, goods.name),
            React.createElement('td', {className:'Goods'}, 
                React.createElement('img', {className: 'Goods', src: goods.photo}),
            ),
            React.createElement('td',{className:'Goods'}, goods.price +' €'),
            React.createElement('td',{className:'Goods'}, 'quantity ' + goods.quantity +' kg'),
            React.createElement('td', {className:'Goods'}, 
            React.createElement("input", {type: 'button', onClick: this.deleteGood, value: 'X'}, ),
        ),
        )
    },
});

            