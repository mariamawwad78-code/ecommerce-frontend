import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Alert from '../components/Alert';

export default function Checkout() {
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const [error, setError] = useState('');
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!address || !card) {
      setError('Please provide shipping address and payment details.');
      return;
    }
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleCheckout} style={styles.form}>
        <h2>Checkout</h2>
        {error && <Alert type="error" message={error} />}
        <div style={styles.field}>
          <label>Shipping Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={styles.input} placeholder="123 Main St, City" />
        </div>
        <div style={styles.field}>
          <label>Credit Card Number</label>
          <input type="text" value={card} onChange={(e) => setCard(e.target.value)} style={styles.input} placeholder="1234 5678 9012 3456" />
        </div>
        <button type="submit" style={styles.btn}>Place Order</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 1rem' },
  form: { background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd', width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  input: { padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  btn: { backgroundColor: '#27ae60', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};