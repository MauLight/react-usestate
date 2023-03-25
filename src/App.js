import './App.css';
import { useState } from 'react';

function App() {

  const [restaurantName, setRestaurantName] = useState("Lemon");
  console.log(restaurantName);

  const updateName = () => {
    setRestaurantName("Little Lemon")
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRestaurantName(e.target.value);
  }

  return (
    <div className="App">
      <h1>{`Hello There ${restaurantName}!`}</h1>
      <input type='text' value={restaurantName} onChange={handleChange} />
      <button className='btn rounded -0 border' onClick={updateName}>Default</button>
    </div>

  );
}

export default App;
