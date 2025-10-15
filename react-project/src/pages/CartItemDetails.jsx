import React, { useState } from 'react';
import { formatMoney } from '../utils/money';
import axios from 'axios';

const CartItemDetails = ({ cartItem, loadCart }) => {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);

    await loadCart();
  };

  const updateQuantity = async () => {
    if (update) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  };

  function handleChange(event) {
    setQuantity(event.target.value);
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      updateQuantity();
    }

    if (event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setUpdate(false);
    }
  }

  return (
    <div>
      <img className='product-image' src={cartItem.product.image} />

      <div className='cart-item-details'>
        <div className='product-name'>{cartItem.product.name}</div>
        <div className='product-price'>
          {' '}
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className='product-quantity'>
          <span>
            Quantity:{' '}
            {update ? (
              <input
                type='text'
                className='quantity-input'
                style={{ opacity: update ? 1 : 0 }}
                value={quantity}
                onChange={handleChange}
                onKeyDown={onKeyDown}
              />
            ) : (
              <span className='quantity-label'> {cartItem.quantity}</span>
            )}
          </span>

          <span
            className='update-quantity-link link-primary'
            onClick={updateQuantity}>
            Update
          </span>

          <span
            className='delete-quantity-link link-primary'
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemDetails;
