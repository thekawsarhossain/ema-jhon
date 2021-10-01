import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Products = (props) => {
    const { img, name, price, seller, stock, star } = props.product;
    const { handleProductItem } = props
    return (
        <div className="row text-start border-bottom my-3 p-2">
            <div className="col-md-4">
                <img className="w-100" src={img} alt="" />
            </div>
            <div className="col-md-8">
                <h6>{name}</h6>
                <h6>Price: <mark>{price}</mark></h6>
                <p>Seller: {seller}</p>
                <p>Available: {stock}</p>
                <Rating
                    style={{ color: "#FF9800" }}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={star}
                /> <br />
                <Button className="border-0 mt-2" style={{ backgroundColor: "#FF9800" }} onClick={() => handleProductItem(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add Item</Button>
            </div>
        </div>
    );
};

export default Products;