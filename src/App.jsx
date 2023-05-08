import { useEffect, useState } from "react";
import { fetchFromRoute } from "./fetchData/fetchData";

function App() {
  useEffect(() => {
    fetchFromRoute("home").then((result) => console.log(result));
  }, []);
  return <></>;
}

export default App;
