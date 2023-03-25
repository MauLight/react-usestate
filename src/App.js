import './App.css';
import { useState } from 'react';
import { ToDo } from './components/to-do';
import { ToDo2 } from './components/to-do2';

function App() {

  const [restaurantName, setRestaurantName] = useState("");
  const [greeting, setGreeting] = useState({ where: "There!", greet: "Hello World" });

  const updateGreetings = () => {
    setGreeting(prevState => { return { ...prevState, greet: `Hello ${restaurantName}` } });
  }

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
      <div className='row'>
        <div className='col my-3'>
          <h1>{`Hello There ${restaurantName}!`}</h1>
          <input type='text' value={restaurantName} onChange={handleChange} />
          <button className='btn rounded-0 border' onClick={updateName}>Default</button>
        </div>
        <hr />
        <div className='col-12 my-3'>
          <h1>{greeting.greet}</h1>
          <button className='btn rounded-0 border' onClick={updateGreetings}>Update Greeting</button>
        </div>
        <div className='col'>
          <ToDo />
        </div>
        <div className='col'>
          <ToDo2 />
        </div>
      </div>
    </div>

  );
}

export default App;
