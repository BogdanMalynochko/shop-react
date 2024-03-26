import React from 'react';
import Product from '../../components/Product';
import { products } from '../../products';

const Shop = () => {
    return (
        <div className="container">
            <h1>Shop</h1>
            {products ? (
                <div className="grid grid-cols-3 gap-12">
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div>here are no products</div>
            )}
        </div>
    );
};

export default Shop;
