import { useState } from 'react';

function RegistrationForm() {
  // Step 1: create state for each field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
