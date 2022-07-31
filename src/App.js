import "./App.css";
// import Sidebar from './Sidebar';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [heroes, setHeroes] = useState([]);

  const hero = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        console.log(response);
        setHeroes(response.data);
      });
  };

  useEffect(() => {
    hero();
  }, []);
  return (
    <div className="">
      {/* <ul>
        {heroes.map(user => (
          <li key={user.id}>
            <img src={user.images.xs} alt="" />
            <h2> {user.name} </h2>
            
          </li>
                 ))
        }
      </ul> */}
      <form onSubmit={hero}>
        <input type="text" name="heroName" />
        <button>Search</button>
      </form>
      {heroes.map((user) => (
        <li key={user.id}>
          <img src={user.images.xs} alt="" />
          <h2> {user.name} </h2>
        </li>
      ))}
    </div>
  );
}

export default App;
