import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2026 ModernStore. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: '3rem',
  },
};