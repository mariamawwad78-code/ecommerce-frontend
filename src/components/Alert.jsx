import React from 'react';

export default function Alert({ type = 'success', message }) {
  const alertStyle = {
    ...styles.alert,
    backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
    color: type === 'success' ? '#155724' : '#721c24',
    borderColor: type === 'success' ? '#c3e6cb' : '#f5c6cb',
  };

  return <div style={alertStyle}>{message}</div>;
}

const styles = {
  alert: {
    padding: '0.75rem 1.25rem',
    marginBottom: '1rem',
    border: '1px solid transparent',
    borderRadius: '4px',
    fontSize: '0.95rem',
  },
};