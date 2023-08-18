import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800">

      <div className="bg-white p-8 rounded shadow-md w-96">

        <h1 className="text-2xl font-semibold mb-4">Welcome to the App</h1>

        <Link href="/login">
          <div className="block bg-blue-500 text-white py-2 rounded text-center mb-2 cursor-pointer"> Login </div>
        </Link>

        <Link href="/register">
          <div className="block bg-green-500 text-white py-2 rounded text-center cursor-pointer"> Register </div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
