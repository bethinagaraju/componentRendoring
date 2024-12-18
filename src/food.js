import React, { useState } from 'react';
// import './components.css'

function Food() {

    const[food,setFood] = useState([]);

    function updateFood(){

        let v = document.getElementById('food').value
        if(v.trim() !== ''){
            setFood([...food,v]);
            document.getElementById('food').value = ''
        }
        else{
            alert('enter food name')
        }
    }

    function deleteFood(fod) {
        setFood(food.filter((f) => f !== fod));
    }


  return (
    <div>
      <h3>food</h3>
      <input id='food' type='text' placeholder='type food'/>
      <button onClick={updateFood}>ADD FOOD</button>
      <ul>
      {food.map((fod, index) => (
        <li key={index}>
          {fod}
          <button onClick={() => deleteFood(fod)} className='del'>X</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Food;
