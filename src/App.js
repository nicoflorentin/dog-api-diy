import React, { useEffect, useState } from "react";
import BreedSelector from "./components/BreedSelector";
import Card from "./components/Card";
import getDog from "./helpers/getDog";

function App() {

  const initialDog = {
    breed : '',
    subBreed : '',
    imgURL : ''
  }

  const [dog, setDog] = useState(initialDog)
  
  const updateDog = (breed, subBreed) => {
    getDog(breed, subBreed).then( (url) => {
      const dog = {
        breed,
        subBreed,
        img:url
      }
  
      setDog(dog)
    })
    
  }


  


  

  return (
    <div className="App">
      <BreedSelector updateDog={ updateDog }/> 
      <Card 
        dog={ dog }
        updateDog={ updateDog }  
      />     
    </div>
  );
}

export default App;
