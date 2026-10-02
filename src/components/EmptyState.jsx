import React from 'react';

export default function EmptyState({ title, description, actionText, onAction }) {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionText && (
        <button style={styles.btn} onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: '#666',
  },
  btn: {
    marginTop: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};