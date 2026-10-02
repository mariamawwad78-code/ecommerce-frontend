import React from 'react';

export default function Account() {
  return (
    <div style={styles.container}>
      <h2>User Account</h2>
      <div style={styles.card}>
        <p><strong>Name:</strong> Test User</p>
        <p><strong>Email:</strong> user@example.com</p>
        <p><strong>Role:</strong> Customer</p>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
  card: { background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }
};