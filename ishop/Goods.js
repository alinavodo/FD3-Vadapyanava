var Goods = React.createClass({

    displayName: 'Goods',

    propTypes: {
        goods: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                photo: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired,   
            }),
        ),
    },


    render: function(){
        var list = [];
        this.props.goods.forEach(function(e){
            var goodsArr =  React.createElement('tr', {key: e.code}, 
                React.createElement('td',{className:'Goods'}, e.name),
                React.createElement('td', {className:'Goods'}, 
                    React.createElement('img', {className: 'Goods', src: e.photo}),
                ),
                React.createElement('td',{className:'Goods'}, e.price +' €'),
                React.createElement('td',{className:'Goods'}, 'quantity ' + e.quantity +' kg'),
                )
            list.push(goodsArr);
        });


        return React.DOM.div({ className:'Ishop'},
        React.createElement(TextShop, {textName: this.props.textName}), 
        React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                   ),
                list
            )
        ))
            
     
    },
});






