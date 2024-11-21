import React from 'react'
import { Link } from 'react-router-dom';
import { navigation } from '../data/data';

function Bottons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {navigation.map((item, index) => (
        <Link key={index} to={item.to}>
          <div className="bg-[#f4bc33] bg-opacity-60 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 p-4">
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Bottons