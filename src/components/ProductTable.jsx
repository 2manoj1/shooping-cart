import React, { Component } from 'react';
import HeaderRow from './HeaderRow';
import ProductRows from './ProductRows';

class ProductTable extends Component {
    render() {
        return (
            <div className="table-wrapper-scroll-y">
                <table className="table table-striped">
                    <HeaderRow />
                    <ProductRows />
                </table>
            </div>

        );
    }
}

export default ProductTable;