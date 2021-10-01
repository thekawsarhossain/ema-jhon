import React from 'react';

const Cart = (props) => {
    const { ordered } = props;

    let totalOrdered = 0;
    let total = 0;
    for (const order of ordered) {
        order.quantity = !order.quantity ? 1 : order.quantity;
        totalOrdered = totalOrdered + order.quantity;
        total = total + order.price * order.quantity;
    }

    const shipping = total > 0 ? 15 * ordered.length : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = shipping + tax + total;

    return (
        <div className="my-2 p-2 text-start">
            <h4 style={{ borderBottom: "1px solid #FF9800", padding: "5px" }}>Order Summary</h4>
            <h6 className="py-1">Item's ordered: {totalOrdered}</h6>
            <div>
                <p className="mb-1">Total: {total.toFixed(2)}</p>
                <p className="mb-1">Shipping: {shipping}</p>
                <p className="mb-1">Tax: {tax.toFixed(2)}</p>
                <h6 style={{ color: '#FF9800' }}>Grand Total: {grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;