import React, { useState } from 'react';
import Link from 'next/link';

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
      confirmPassword,
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
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-0 px-2 mb-2 border-b border-green-900 bg-black focus:outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {/* Add more input fields for Birthday, Address, Contact Number, and Email */}
          </div>
          <div>
            {/* ... (more input fields for Basic Information) */}
          </div>
        </div>

        {/* Platform Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* Add input fields for Position, Department */}
          </div>
          <div>
            {/* Add input fields for Username, Password, and Confirm Password */}
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white py-2 rounded mt-4"
        >
          Register
        </button>

        {registered && (
          <p className="text-green-500 mt-2 text-center">
            Registered successfully!{' '}
            <Link href="/login" passHref>
              <span className="text-green-500 cursor-pointer hover:underline">
                Go to login
              </span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
