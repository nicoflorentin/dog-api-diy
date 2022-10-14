const getDog = async (breed, subBreed) => {
    console.log('get:', breed, subBreed)
    let URL
    if (subBreed.length) {
        URL = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
    } else {
        URL = `https://dog.ceo/api/breed/${breed}/images/random`
    }
    const response = await fetch(URL)
        .then(res=>res.json())
        .then(res=>res)
    
    return response.message
}

export default getDog