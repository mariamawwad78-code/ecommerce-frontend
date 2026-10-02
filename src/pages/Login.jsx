import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../components/Alert';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // محاكاة تسجيل الدخول الناجح
    alert('Logged in successfully!');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>
        {error && <Alert type="error" message={error} />}
        <div style={styles.field}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.field}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </div>
        <button type="submit" style={styles.btn}>Login</button>
        <p style={styles.linkText}>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 1rem' },
  form: { background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  input: { padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  btn: { backgroundColor: '#3498db', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  linkText: { textAlign: 'center', fontSize: '0.9rem', marginTop: '0.5rem' }
};