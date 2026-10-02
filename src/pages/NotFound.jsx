import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.btn}>Go Back Home</Link>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '5rem 1rem' },
  btn: { display: 'inline-block', marginTop: '1.5rem', backgroundColor: '#3498db', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }
};