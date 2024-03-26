import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
    const { getTotalProductsAmount } = useContext(ShopContext);

    return (
        <nav className="py-6 bg-slate-400">
            <ul className="container flex justify-end items-center gap-6">
                <Link to="/" className="text-lg hover:underline">
                    Shop
                </Link>
                <Link
                    to="/cart"
                    className="text-lg flex items-center gap-1.5 hover:underline relative"
                >
                    Cart
                    <ShoppingCart size={20} />
                    <span className="text-[12px] absolute -right-2 -top-2">
                        {getTotalProductsAmount()}
                    </span>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
