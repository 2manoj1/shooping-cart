import React, { Component } from 'react';
import { connect } from 'react-redux';
import Orderinfo from '../presentation/Orderinfo';

class OrderDetails extends Component {
    render() {
        return (
            this.props.data.length > 0 && <div className="container">
                <p>This order has following packages:</p>
                <div className="card-deck">
                    {this.props.data && this.props.data.map((v) => <Orderinfo key={v.pid} {...v} />)}
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ orderdetails }) => ({
    data: orderdetails
});



export default connect(mapStateToProps, null)(OrderDetails);