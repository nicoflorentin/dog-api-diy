const getBreeds = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const formattedData = data.message;
    // console.log(formattedData)

    let formattedBreeds = Object.entries(formattedData).map((entry , index) => {
      const [breed, subBreeds] = entry;
      return {    
        breed,
        subBreeds,
        id: index
      }
	  });

    const { status, url } = response;
    if (!response.ok) {
      throw new Error(`Error: ${status}, at URL: ${url}`);
    }
    return formattedBreeds;
	
  } catch (err) {
    console.error(err);
  }
};

export default getBreeds;
