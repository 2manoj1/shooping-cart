import React from 'react';
import PropTypes from 'prop-types';

const HeaderCol = props => {
    return (
        <th scope="col">{props.value}</th>  
    );
};

HeaderCol.propTypes = {
    value: PropTypes.string.isRequired
};

export default HeaderCol;