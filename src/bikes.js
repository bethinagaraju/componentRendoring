import React, { useState } from 'react';
// import './components.css'

function Bikes() {
  const [bikes, setBikes] = useState([]);

  function updateBike() {
    const v = document.getElementById('bike').value; 
    if (v.trim() !== '') {
      setBikes([...bikes, v]);
      document.getElementById('bike').value = ''
    }
    else{
        alert("enter bike name")
    }
    
  }

  function deleteBike(bike){
     setBikes(bikes.filter((b)=> b !== bike))
  }

  return (
    <div>
        <h2>BIKES</h2>
      <input id="bike" type="text" placeholder="Enter bike name" />
      <button onClick={updateBike}>ADD BIKE</button>
      <ul>
        {bikes.map((bike, index) => (
          <li key={index}>{bike}<button onClick={()=>deleteBike(bike)} className='del'>x</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Bikes;
