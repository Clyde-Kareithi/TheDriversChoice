import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const IndexPage: React.FC = () => {


  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-white text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="" className="text-3xl font-bold text-black" >The Driver's Choice</a>
          </div>
        </div>
      </nav>


      <footer className="text-center py-4 text-black object-bottom bg-slate-400">
        <p>&copy; 2023 The Driver's Choice. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;


