import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductRow from '../presentation/ProductRow';
import { getProducsInfo, addToCart, removeFromCart } from '../redux/actions';

class ProductRows extends Component {
    componentDidMount(){
        this.props.getProducsInfo();
    }
    render() {
        return (
            <tbody>
                {this.props.data && this.props.data.map((v) => <ProductRow key={v.id} {...v} onClick={(e) => e.target.checked ? this.props.addToCart(v.id) : this.props.removeFromCart(v.id)} />)}
            </tbody>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({ 
    getProducsInfo: () => dispatch(getProducsInfo()),
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
});
const mapStateToProps = ({products}) => ({
    data: products
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductRows);