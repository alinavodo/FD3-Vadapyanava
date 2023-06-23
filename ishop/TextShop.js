var TextShop = React.createClass({

    displayName: 'TextShop',

    propTypes: {
        textName: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.DOM.div( {className:'TextShop'}, this.props.textName );
    },
});