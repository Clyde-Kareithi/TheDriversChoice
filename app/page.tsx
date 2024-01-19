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
          <ul className="flex">
            <li><a href="" className="px-3 py-2">Home</a></li>
            <li><a href="" className="px-4 py-2">Buy a Car</a></li>
            <li><a href="" className="px-5 py-2">Sell Your Car</a></li>
            <li><a href="" className="px-6 py-2">About</a></li>
            <li><a href="" className="px-7 py-2">Sign up</a></li>
            <li><a href="" className="px-7 py-2">Login</a></li>
            <li><a href="" className="px-7 py-2">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-bold mb-6 text-black">Find Your Perfect Car</h1>
        <p className="text-black text-lg mb-8">Explore our vehicles</p>
      </div>

      <div className='w-full flex flex-row justify-center items-center py-4'>
      <Link href="/app/buy" passHref>
        <button id="" className='text-white w-fit h-fit bg-black px-4 py-2 mx-2 rounded-lg'>Buy your car</button>
        </Link>
        <button className='text-white w-fit h-fit bg-black px-4 py-2 rounded-lg'>Sell your car</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto py-2">
      <div className="rounded overflow-hidden shadow-lg">
      <Image src="/images/carpics/amgg63.jpg" alt="AMG G63" width={600} height={400} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">AMG G63</p>
      </div>
    </div>
    <div className="rounded overflow-hidden shadow-lg">
      <Image src="/images/carpics/cayenneturbogt.jpg" alt="AMG G63" width={600} height={400} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">AMG G63</p>
      </div>
    </div>
    <div className=" max-w-s rounded overflow-hidden shadow-lg">
      <Image className="rounded w-full" src="/images/carpics/rrsvr.jpg" alt="AMG G63" width={600} height={400} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">AMG G63</p>
      </div>
    </div>
    <div className=" max-w-s rounded overflow-hidden shadow-lg">
      <Image className="rounded w-full" src="/images/carpics/rrsvr.jpg" alt="AMG G63" width={600} height={400} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">AMG G63</p>
      </div>
    </div>
    <div className=" max-w-s rounded overflow-hidden shadow-lg">
      <Image className="rounded w-full" src="/images/carpics/rrsvr.jpg" alt="AMG G63" width={600} height={400} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">AMG G63</p>
      </div>
    </div> 
      </div>
  );
      <footer className="text-center py-4 text-black object-bottom bg-slate-400">
        <p>&copy; 2023 The Driver's Choice. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;


