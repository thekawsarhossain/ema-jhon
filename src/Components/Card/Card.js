import React from 'react';

const Card = (props) => {
    const { ordered } = props;
    return (
        <div className="my-2 p-2">
            <h4 style={{ borderBottom: "1px solid #f0c14b" }}>Order Summary</h4>
            <div className="text-start py-2">
                <h6>Item's ordered: {ordered.length}</h6>
            </div>
        </div>
    );
};

export default Card;