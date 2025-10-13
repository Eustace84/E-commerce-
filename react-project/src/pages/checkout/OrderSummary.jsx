import DeliveryOptions from './DeliveryOptions';
import CartItemDetails from '../CartItemDetails';
import DeliveryDate from './DeliveryDate';

const OrderSummary = ({ deliveryOptions, cart, loadCart }) => {
  return (
    <div>
      <div className='order-summary'>
        {deliveryOptions.length > 0 &&
          cart.map((cartItem) => {
            return (
              <div key={cartItem.productId} className='cart-item-container'>
                <DeliveryDate
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />

                <div className='cart-item-details-grid'>
                  <CartItemDetails cartItem={cartItem} />

                  <DeliveryOptions
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                    loadCart={loadCart}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderSummary;
