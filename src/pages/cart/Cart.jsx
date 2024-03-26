import { React, useContext } from 'react';
import { products } from '../../products';
import { ShopContext } from '../../context/shopContext';
import CardItem from '../../components/CardItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cardItems, getTotalCartAmount } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="grid grid-cols-1 gap-6 max-w-[512px] mx-auto">
                {products.map(product => {
                    if (cardItems[product.id] !== 0) {
                        return <CardItem key={product.id} product={product} />;
                    }
                })}
            </div>
            {getTotalCartAmount() > 0 ? (
                <p className="font-bold text-center mt-10 mb-5">
                    Subtotal: {Math.ceil(getTotalCartAmount())} $
                </p>
            ) : (
                <h1>Your Card Is Empty</h1>
            )}
            <div className="text-center">
                <button onClick={() => navigate('/')} className="btn w-max">
                    Shop
                </button>
            </div>
        </div>
    );
};

export default Cart;
