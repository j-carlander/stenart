import { Home } from "./pages/Home";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import { NoPage } from "./pages/NoPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
