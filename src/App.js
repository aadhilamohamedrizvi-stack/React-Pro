import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men from './Components/Assets/men.jpg';
import women from './Components/Assets/women.jpg';

// Simple Footer component
const Footer = () => {
  return (
    <footer style={{padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa'}}>
      <p>© 2025 Your Store. All rights reserved.</p>
    </footer>
  );
};

// ShopCategory component
const ShopCategory = ({ banner, category }) => {
  return (
    <div>
      <img src={banner} alt={category} />
      Shop Category: {category} - Page under construction
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women} category="women"/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;