'use client'
import React, {useState, useEffect }from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';


const IndexPage: React.FC = () => {
  const [carData, setCarData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    make: [],
    model: [],
    year: [],
    trim: [],
    // Add other filter options like trim, price, etc.
  });
  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    model: '',
    year: '',
    trim: '',
    // Add other selected filter states
  });

  useEffect(() => {
    fetchData(selectedFilters.year, selectedFilters.make);
  }, []);

  const fetchData = async (year: string, make: string) => {
    try {
      const response = await axios.get(`https://mc-api.marketcheck.com/v2/search/car/active?api_key=	290afd35-049d-49c2-bc17-8a413bd44ca1&year=${year}&make=${make.toLowerCase()}`); // Replace with your actual API endpoint
      setCarData(response.data);

      const makeOptions = response.data.map((car: any) => car.make);
      const modelOptions = response.data.map((car: any) => car.model);
      const yearOptions = response.data.map((car: any) => car.year);
      const trimOptions = response.data.map((car: any) => car.trim);
      // Add similar sections for other filter options like price, etc.

      setFilterOptions({
        make: makeOptions,
        model: modelOptions,
        year: yearOptions,
        trim: trimOptions,
        // Add other filter options
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterSelect = (filterType: string, value: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

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
      <Link href="/buy" legacyBehavior>
        <button   id="" className='text-white w-fit h-fit bg-black px-4 py-2 mx-2 rounded-lg'>Buy your car</button>
        </Link>
        <Link href="/sell">
        <button className='text-white w-fit h-fit bg-black px-4 py-2 rounded-lg'>Sell your car</button>
        </Link> 
      </div>
      <div className='px-3'>
        
        <label>Make:</label>
        <select onChange={(e) => handleFilterSelect('make', e.target.value)}>
          <option value="">Audi</option>
          <option value="">BMW</option>
          <option value="">Honda</option>
          <option value="">Land Rover</option>
          <option value="">Lexus</option>
          <option value="">Mazda</option>
          <option value="">Mitsubishi</option>
          <option value="">Mazda</option>
          <option value="">Mercedes-Benz</option>
          <option value="">Nissan</option>
          <option value="">Porsche</option>
          <option value="">Peugeot</option>
          <option value="">Suzuki</option>
          <option value="">Toyota</option>
          <option value="">Volvo</option>
          <option value="">Volkswagen</option>
          {filterOptions.make.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <label>Model:</label>
        <select onChange={(e) => handleFilterSelect('model', e.target.value)}>
          <option value="">All</option>
          {filterOptions.model.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <select onChange={(e) => handleFilterSelect('year', e.target.value)}>
          <option value="">All</option>
          {filterOptions.year.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

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
  ):(
      <footer className="text-center py-4 text-black object-bottom bg-slate-400">
        <p>&copy; 2023 The Driver's Choice. All Rights Reserved.</p>
      </footer>
    </div>
  )
  </div>
)};


export default IndexPage;


