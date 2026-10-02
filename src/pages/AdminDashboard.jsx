import React, { useState } from 'react';
import Alert from '../components/Alert';

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [success, setSuccess] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!title || !price) {
      alert('Please fill all product fields.');
      return;
    }
    setSuccess('Product added successfully!');
    setTitle('');
    setPrice('');
  };

  return (
    <div style={styles.container}>
      <h2>Admin Dashboard - Manage Products</h2>
      {success && <Alert type="success" message={success} />}
      <form onSubmit={handleAddProduct} style={styles.form}>
        <h3>Add New Product</h3>
        <div style={styles.field}>
          <label>Product Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.field}>
          <label>Price ($)</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.field}>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <button type="submit" style={styles.btn}>Add Product</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
  form: { background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  input: { padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  btn: { backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};