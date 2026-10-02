import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={styles.container}>
        <h2>Product Not Found</h2>
        <button style={styles.btn} onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
      <div style={styles.detailsGrid}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <div style={styles.info}>
          <span style={styles.category}>{product.category}</span>
          <h2>{product.title}</h2>
          <p style={styles.price}>${product.price.toFixed(2)}</p>
          <p style={styles.desc}>{product.description}</p>
          <p style={styles.stock}>⭐ {product.rating} | Stock: {product.stock} available</p>
          <button style={styles.addBtn} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '1000px', margin: '0 auto' },
  backBtn: { background: 'none', border: 'none', color: '#3498db', cursor: 'pointer', fontSize: '1rem', marginBottom: '1rem' },
  detailsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd' },
  image: { width: '100%', height: '350px', objectFit: 'cover', borderRadius: '6px' },
  info: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  category: { fontSize: '0.85rem', color: '#888', textTransform: 'uppercase' },
  price: { fontSize: '1.5rem', fontWeight: 'bold', color: '#27ae60' },
  desc: { color: '#555', lineHeight: '1.6' },
  stock: { color: '#666', fontSize: '0.9rem' },
  addBtn: { backgroundColor: '#3498db', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: 'fit-content' },
  btn: { backgroundColor: '#3498db', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }
};