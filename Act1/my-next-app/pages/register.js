import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Store registered user in localStorage
    const newUser = {
      fullName,
      birthday,
      address,
      contactNumber,
      email,
      position,
      department,
      username,
      password,
    };
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Set registered state to true after successful registration
    setRegistered(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        {/* Basic Information */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Basic Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Birthday"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Platform Information */}
        <div>
          <h2 className="text-xl mb-2">Platform Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Position"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <input
              type="text"
              placeholder="Department"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-0 px-2 mb-4 border-b border-green-900 bg-black focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white py-2 rounded mt-4"
        >
          Register
        </button>

        <Link href="/login" passHref>
          <span className="text-green-500 flex items-center justify-center hover:text-white">
            Go to login
          </span>
        </Link>

        {registered && (
          <p className="text-green-500 mt-2 flex text-center justify-center">
            Registered successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
