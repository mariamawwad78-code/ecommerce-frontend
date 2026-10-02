import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartPage({ setCurrentPage }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Your Shopping Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button style={styles.shopBtn} onClick={() => setCurrentPage('products')}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      <div style={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h4>{item.title}</h4>
              <p style={styles.price}>${item.price.toFixed(2)}</p>
            </div>
            <div style={styles.actions}>
              <button
                style={styles.qtyBtn}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                style={styles.qtyBtn}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.summary}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <div style={styles.summaryBtns}>
          <button style={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
          <button style={styles.checkoutBtn} onClick={() => alert('Checkout functionality coming soon!')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  shopBtn: {
    marginTop: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    gap: '1rem',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  details: {
    flexGrow: 1,
  },
  price: {
    color: '#27ae60',
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  qtyBtn: {
    padding: '0.3rem 0.6rem',
    backgroundColor: '#ecf0f1',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  removeBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  summary: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ddd',
    textAlign: 'right',
  },
  summaryBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '1rem',
  },
  clearBtn: {
    backgroundColor: '#95a5a6',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  checkoutBtn: {
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};