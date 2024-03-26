import { React, useContext } from 'react';
import { ShopContext } from '../context/shopContext';

const Product = ({ product }) => {
    const { addToCard, cardItems } = useContext(ShopContext);
    const cartItemAmount = cardItems[product.id];

    return (
        <div data-aos="flip-up" className="product--card">
            <img className="p-8 rounded-t-lg" src={product.productImage} />
            <div className="px-5 pb-5">
                <h5>{product.productName}</h5>
                <div className="flex items-center justify-between">
                    <h5>{product.price} $</h5>
                    <button
                        onClick={() => addToCard(product.id)}
                        className="btn"
                    >
                        Add to cart{' '}
                        {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
