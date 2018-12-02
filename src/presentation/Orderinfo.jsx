import React from 'react';

const Orderinfo = props => {
    return (

        <div className="card bg-success">
            <div className="card-body text-center">
                <div>
                    {props.pktname}
                </div>
                <div>
                    <label>Items - </label> {props.items}
                </div>
                <div>
                    <label>Total weight - </label> {props.totalweight}(g)
                </div>
                <div>
                    <label>Total price - </label> ${props.totalprice}
                </div>
                <div>
                    <label>Courier price - </label> ${props.ccharge}
                </div>
            </div>
        </div>
    );
};

export default Orderinfo;