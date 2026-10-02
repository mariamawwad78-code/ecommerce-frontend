import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../components/Alert';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2>Register</h2>
        {error && <Alert type="error" message={error} />}
        <div style={styles.field}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.field}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.field}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </div>
        <button type="submit" style={styles.btn}>Register</button>
        <p style={styles.linkText}>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 1rem' },
  form: { background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  input: { padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  btn: { backgroundColor: '#27ae60', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  linkText: { textAlign: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }
};