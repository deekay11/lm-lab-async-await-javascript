import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const randomJokeAPI = "https://official-joke-api.appspot.com/jokes/random";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    //console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
fetchData(randomJokeAPI);
