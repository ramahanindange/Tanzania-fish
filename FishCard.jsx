import React from 'react';

export default function FishCard({ fish }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img src={fish.image_url} alt={fish.name_sw} className="w-48 h-48 object-cover rounded-lg mb-2" />
      <h2 className="font-bold text-xl text-blue-700">{fish.name_sw}</h2>
      <h3 className="text-gray-700 italic">{fish.name_en}</h3>
      <p className="text-sm mt-2">{fish.description}</p>
      <span className="text-xs text-gray-500">Habitat: {fish.habitat}</span>
    </div>
  );
}