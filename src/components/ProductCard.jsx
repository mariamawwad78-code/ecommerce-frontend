import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.content}>
        <span style={styles.category}>{product.category}</span>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <p style={styles.rating}>⭐ {product.rating} ({product.stock} in stock)</p>
        <button style={styles.button} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: '0.8rem',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1rem',
    margin: '0 0 0.5rem 0',
    color: '#333',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#27ae60',
    margin: '0 0 0.5rem 0',
  },
  rating: {
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '0.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};