import React, {useState} from 'react';
// import './components.css'

function Cars() {
    const[cars, setCars] = useState([]);

    function updateCars(){
        let v = document.getElementById('car').value;
        if(v.trim() !==''){
            setCars([...cars,v]);
            document.getElementById('car').value = ''
        }
        else{
            alert("enter car name")
        }
    }


    function deleteCar(car){
       
        setCars(cars.filter((c)=> c !== car))

    }



  return (
    <div>
      <h2>CARS</h2>
      <input type='text' placeholder='Enter cars' id='car'/>
      <button onClick={updateCars}>ADD CAR</button>
      <ul>
      {cars.map((car, index) => (
          <li key={index}>{car} <button className='del' onClick={()=>deleteCar(car)}>X</button> </li>
        ))}
        </ul>
    </div>
  );
}

export default Cars;
