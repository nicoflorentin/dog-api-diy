import React from 'react'

const Card = ({ dog, updateDog }) => {

    return (
        <img 
            src={ dog.img }
            onClick={ ()=>{updateDog(dog.breed, dog.subBreed)} }
        >
        </img>
    )
}

export default Card