

import Header from '../../components/Header';
import { useEffect, useState } from 'react';


import './HomePage.css';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

const Homepage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products  ');
      response.data;
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <div>
      <link rel='shortcut icon' href='home-favicon.png' type='image/x-icon' />
      <title>Home Page</title>

      <Header cart={cart} />

      <div className='home-page'>
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  );
};

export default Homepage;
