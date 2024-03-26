import { React, useContext } from 'react';
import { ShopContext } from '../context/shopContext';

const CardItem = ({ product }) => {
    const { cardItems, addToCard, removeFromCard, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div data-aos="flip-up" className="cart-product--card">
            <div className="w-1/3 mx-auto">
                <img className="py-3 rounded-t-lg" src={product.productImage} />
            </div>
            <div className="px-5">
                <h5 className="text-black">{product.productName}</h5>
                <h5 className="text-black">{product.price} $</h5>
                <div className="flex gap-2">
                    <button onClick={() => removeFromCard(product.id)}>
                        -
                    </button>
                    <input
                        type="number"
                        value={cardItems[product.id]}
                        onChange={e =>
                            updateCartItemCount(
                                Number(e.target.value),
                                product.id
                            )
                        }
                    />
                    <button onClick={() => addToCard(product.id)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
