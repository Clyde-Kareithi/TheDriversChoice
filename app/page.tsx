import React from 'react';
import Image from 'next/image';

const IndexPage: React.FC = () => {
  return (
    <div className="bg-purple-300 min-h-screen">
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="" className="text-3xl font-bold">The Driver's Choice</a>
          </div>
          <ul className="flex">
            <li><a href="" className="px-3 py-2">Home</a></li>
            <li><a href="" className="px-4 py-2">Buy a Car</a></li>
            <li><a href="" className="px-5 py-2">Sell Your Car</a></li>
            <li><a href="" className="px-6 py-2">About</a></li>
            <li><a href="" className="px-7 py-2">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-bold mb-6">Find Your Perfect Car</h1>
        <p className="text-white text-lg mb-8">Explore our vehicles</p>
      </div>

      <footer className="text-center py-4 bg-black text-white">
        <p>&copy; 2023 The Driver's Choice. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;


