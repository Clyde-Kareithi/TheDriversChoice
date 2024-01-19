import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const InitialQuestion = () => {
  return (
    <div>
      <h2>Do you know what you're looking for?</h2>
      <Link href="/buy/makeAndModel">
        <a>I know the make and model</a>
      </Link>
      <Link href="/buy/dontKnow">
        <a>I don't know what I want</a>
      </Link>
    </div>
  );
};

export default InitialQuestion;
