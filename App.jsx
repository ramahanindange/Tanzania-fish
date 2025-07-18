import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FishCard from './components/FishCard';
import FishDetailModal from './components/FishDetailModal';

function App() {
  const [fishList, setFishList] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/fish')
      .then(res => setFishList(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="p-4 bg-blue-700 text-white text-2xl font-bold text-center">Samaki Tanzania</header>
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {fishList.map(fish => (
          <FishCard key={fish._id} fish={fish} onClick={() => setSelectedFish(fish)} />
        ))}
      </main>
      {selectedFish && 
        <FishDetailModal fish={selectedFish} onClose={() => setSelectedFish(null)} />
      }
    </div>
  );
}

export default App;