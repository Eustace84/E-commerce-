import Header from '../../components/Header';
import { useEffect, useState } from 'react';
 

import './HomePage.css';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';
import { useSearchParams } from 'react-router';

const Homepage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products'
   
      const response = await axios.get(urlPath)
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);

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
