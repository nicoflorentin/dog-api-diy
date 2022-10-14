import React, { useEffect, useState } from "react";

import getBreeds from "../helpers/getBreeds.js";

const initialDog = {
  breed: "",
  subBreeds: [],
};

const BreedSelector = ({ updateDog }) => {
  const [breeds, setBreeds] = useState([]);
  const [selection, setSelection] = useState(initialDog);

  useEffect(() => {
    getBreeds().then((breeds) => {
      setBreeds(breeds);
    });
  }, []);

  const selectorHandler = (breed, subBreed) => {
    console.log(breed, subBreed);
    const foundDog = breeds.find((dog) => breed === dog.breed);
    setSelection(foundDog);

    if (subBreed == null && !foundDog.subBreeds.length) {
      updateDog(breed, []);
    } else if (subBreed) {
      updateDog(breed, subBreed);
    }
  };

  return (
    <>
      <select
        name="breedSelect"
        onChange={(e) => {
          selectorHandler(e.target.value, null);
        }}
      >
        {breeds.map((breed) => (
          <option value={breed.breed} key={breed.id}>
            {breed.breed}
          </option>
        ))}
      </select>

      {
        // CONDITIONAL RENDERING
        selection.subBreeds.length ? (
          <select
            name="subBreedSelect"
            onChange={(e) => selectorHandler(selection.breed, e.target.value)}
          >
            {selection.subBreeds.map((subBreed, index) => (
              <option value={subBreed} key={subBreed + index}>
                {subBreed}
              </option>
            ))}
          </select>
        )
        : null
      }
    </>
  );
};

export default BreedSelector;
