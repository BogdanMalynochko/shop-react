import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopContextProvider from './context/shopContext';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
