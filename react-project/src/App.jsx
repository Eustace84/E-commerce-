import Homepage from './pages/home/Homepage';
import './App.css';
import { Routes, Route } from 'react-router';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/orders/OrdersPage'
import TrackingPage from './pages/TrackingPage';
import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import axios from 'axios';




function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    
    const getAppData = async () => {
      
        const response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
    }
   getAppData()
  }, [])
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={ cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
