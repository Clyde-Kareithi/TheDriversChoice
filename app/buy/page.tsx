// pages/InitialQuestion.tsx
import React from 'react';
import Link from 'next/link';



export const InitialQuestion = () => {

  return (
    <div className="bg-white min-h-screen">
      
      <div className="bg-white">
        <h2 className="text-black px-4 py-6">Do you know what you're looking for?</h2>
        <button   id="" className='text-white w-fit h-fit bg-black px-4 py-2 mx-2 rounded-lg'>I know what I want</button>
        <Link href="/app/car-discovery" legacyBehavior>
        <button className='text-white w-fit h-fit bg-black px-4 py-2 rounded-lg'>No I do not</button>
        </Link>   
      </div>
    </div>
  );
};

export default InitialQuestion;
