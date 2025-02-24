import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems }) => {
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert('No hay artículos en el carrito.');
      return;
    }
    // Logic to process the purchase
    alert('Compra realizada con éxito');
    // Clear the cart after purchase
    window.location.href = '/';
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="confirm-purchase-button" onClick={handlePurchase} disabled={cartItems.length === 0}>
        Confirmar Compra
      </button>
    </div>
  );
};

export default Cart;
