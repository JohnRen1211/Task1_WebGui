import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // Retrieve registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if entered username and password match any registered user
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Successful login
      setLoginError(false);
      alert('Logged in successfully');
    } else {
      // Failed login
      setLoginError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        
        <input
          type="text"
          placeholder="Username"
          className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded">
          Login
        </button>

        {loginError && (
          <p className="text-red-500 mt-2">Incorrect username or password</p>
        )}
        <Link href="/register" passHref>
          <span className ="text-green-500 flex items-center justify-center hover:text-white" >Register here </span>
        </Link>

      </div>
    </div>
  );
};

export default Login;

