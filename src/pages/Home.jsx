import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home({ setCurrentPage }) {
  // نعرض أول 4 منتجات كمقترحات في الصفحة الرئيسية
  const featuredProducts = products.slice(0, 4);

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>Welcome to ModernStore</h1>
        <p>Discover our exclusive collection of top-quality products at unbeatable prices.</p>
        <button style={styles.heroBtn} onClick={() => setCurrentPage('products')}>
          Shop Now
        </button>
      </div>

      <div style={styles.section}>
        <h2>Featured Products</h2>
        <div style={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    backgroundColor: '#34495e',
    color: '#fff',
    padding: '4rem 2rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heroBtn: {
    marginTop: '1.5rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
};