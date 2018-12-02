import React from 'react';
import ProductCol from './ProductCol';
import ProductCheckBox from './CheckBox';

const ProductRow = props => {
    return (
        <tr>
            <ProductCol>
                {props.name}
            </ProductCol>
            <ProductCol>
                {props.price}
            </ProductCol>
            <ProductCol>
                {props.weight}
            </ProductCol>
            <ProductCol>
                <ProductCheckBox onClick={props.onClick} />
            </ProductCol>
        </tr>  
    );
};

export default ProductRow;