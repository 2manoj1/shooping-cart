import React from 'react';

const ProductCheckBox = (props) => {
    return (
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox" onClick={props.onClick} aria-label="Checkbox for following product" />
            </div>
        </div>
    );
};

export default ProductCheckBox;