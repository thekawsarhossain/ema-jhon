import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import Card from '../Card/Card';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch('/products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const handleProductItem = product => {
        const totalOrdered = [...ordered, product];
        setOrdered(totalOrdered);
    }

    return (
        <div>
            {/* form here */}
            <div style={{ backgroundColor: "#333" }}>
                <Form className="p-2 w-75 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
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
                        <Card ordered={ordered}></Card>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Shop;