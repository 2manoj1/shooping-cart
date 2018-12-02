import React, { Component } from 'react';
import HeaderCol from '../presentation/HeaderCol';
const headersValue = ['Name', 'Price($)', 'Weight(g)', '']

class HeaderRow extends Component {
    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    {headersValue.map((value, i) => <HeaderCol key={i} value={value} />)}
                </tr>
            </thead>
        );
    }
}

export default HeaderRow;