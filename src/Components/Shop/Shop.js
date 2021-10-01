import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch('/products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setOrdered(storedCart);
        }
    }, [products]);

    const handleProductItem = product => {
        const totalOrdered = [...ordered, product];
        setOrdered(totalOrdered);
        // add to local storage here
        addToDb(product.key);

    }

    return (
        <div>
            {/* form here */}
            <div style={{ backgroundColor: "#333" }}>
                <Form className="p-2 w-75 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search Products here"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </div>
            <Container>
                {/* products container */}
                <div className="row">
                    <div className="col-md-9 border">
                        {
                            products.map(product => <Products
                                key={product.key}
                                product={product}
                                handleProductItem={handleProductItem}
                            />)
                        }
                    </div>
                    <div className="col-md-3">
                        <Cart ordered={ordered}></Cart>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Shop;