
import Header from '../../components/Header';
import axios from 'axios';
import { useEffect, useState} from 'react';
import './ordersPage.css';
import OrderGrid from './OrderGrid';


const OrdersPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products')
       setOrders(response.data);
    }
    getOrdersData()
  }, []);
  return (
    <div>
      <link rel='shortcut icon' href='orders-favicon.png' type='image/x-icon' />
      <title>Orders</title>

      <Header cart={cart} />

      <div className='orders-page'>
        <div className='page-title'>Your Orders</div>
         
        <OrderGrid orders={ orders} />
      </div>
    </div>
  );
};

export default OrdersPage;
