import OrderHeader from './OrderHeader';
import OrderDetailsGrid from './OrderDetailsGrid';

const OrderGrid = ({ orders, cart }) => {
  return (
    <div>
      <div className='orders-grid'>
        {orders.map((order) => {
          return (
            <div key={orders.id} className='order-container'>
              <OrderHeader order={order} />

              <OrderDetailsGrid order={order} cart={ cart} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderGrid;
