import { useEffect, useState } from "react";
import Card from "./components/cards";

import "./App.css";
import Form from "./components/form";

function App() {
  const [renderCard, setRenderCard] = useState([]);
  const [msError, setMsError] = useState("");
  const [start, setStart] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [filteredValue, setFilteredValue] = useState([]);

  const handleItems = (value) => {
    setFilteredValue(value.toLowerCase().split("/"));
    value && setStart(true);
  };
  useEffect(() => {
    start &&
      fetch(
        `https://api.github.com/repos/${filteredValue[0]}/${filteredValue[1]}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (!res.message) {
            setRenderCard([...renderCard, res]);
            setAllowed(true);
            setMsError("");
          } else {
            setMsError(res);
          }
        });
  }, [filteredValue]);

  return (
    <div className="App">
      <Form msError={msError} handleItems={handleItems} />
      {allowed && <Card renderCard={renderCard} />}
    </div>
  );
}

export default App;
