import Homepage from './pages/Homepage';
import './App.css';
import { Routes, Route } from 'react-router';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import axios from 'axios';




function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
        axios.get('/api/cart-items').then((response) => {
          setCart(response.data);
        });
  }, [])
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
