import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder } from '../redux/actions';

class PlaceOrder extends Component {
    render() {
        return (
            <button type="button" onClick={this.props.placeOrder} className="btn btn-dark"><i className="fas fa-location-arrow"></i> Place Order</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    placeOrder: () => dispatch(placeOrder())
});



export default connect(null, mapDispatchToProps)(PlaceOrder);