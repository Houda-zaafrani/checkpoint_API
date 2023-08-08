import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Snipper from "./component/Snipper";
import ListUser from "./component/ListUser";

function App() {
  const [listOfUser, setListOfUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setListOfUser(users.data))
      .catch((err) => console.log("error:", err));
  }, []);

  return (
    <div className="App">
      <h1 style ={{paddingTop : 15}}>List of users</h1>
      {listOfUser ? <ListUser listOfUser={listOfUser} /> : <Snipper />}
    </div>
  );
}

export default App;
