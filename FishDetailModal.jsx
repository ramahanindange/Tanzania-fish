import React from 'react';

export default function FishDetailModal({ fish, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-800" onClick={onClose}>X</button>
        <img src={fish.image_url} alt={fish.name_sw} className="w-full h-60 object-cover rounded mb-4" />
        <h2 className="font-bold text-2xl mb-2 text-blue-700">{fish.name_sw}</h2>
        <h3 className="italic text-lg text-gray-700 mb-2">{fish.name_en}</h3>
        <p className="text-xs text-gray-500 mb-2">{fish.scientific_name}</p>
        <p className="mb-2">{fish.description}</p>
        <div className="mb-2"><span className="font-semibold">Habitat:</span> {fish.habitat}</div>
        <div className="mb-2"><span className="font-semibold">Distribution:</span> {fish.distribution}</div>
        <ul className="list-disc pl-5">
          {fish.facts && fish.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
        </ul>
      </div>
    </div>
  );
}