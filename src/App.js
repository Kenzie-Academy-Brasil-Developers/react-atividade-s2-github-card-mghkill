import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const [apiData, setApiData] = useState({});
  const handleItems = (value) => {
    console.log(value);
  };
  useEffect(() => {
    fetch(`https://api.github.com/repos/${"facebook"}/${"react"}`)
      .then((res) => res.json())
      .then((res) => setApiData(res));
  }, []);
  return (
    <div className="App">
      <Form apiData={apiData} handleItems={handleItems} />
    </div>
  );
}

export default App;
