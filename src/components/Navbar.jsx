import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        🛍️ ModernStore
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.linkBtn}>Home</Link>
        <Link to="/products" style={styles.linkBtn}>Products</Link>
        <Link to="/login" style={styles.linkBtn}>Login</Link>
        <Link to="/register" style={styles.linkBtn}>Register</Link>
        <Link to="/account" style={styles.linkBtn}>Account</Link>
        <Link to="/admin" style={styles.linkBtn}>Admin</Link>
        <Link to="/cart" style={styles.cartBtn}>
          🛒 Cart <span style={styles.badge}>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    cursor: 'pointer',
    margin: 0,
    fontSize: '1.5rem',
    color: '#fff',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center',
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  cartBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  badge: {
    backgroundColor: '#fff',
    color: '#e74c3c',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '0.8rem',
    marginLeft: '5px',
  },
};