import { Home } from "./pages/Home";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import { NoPage } from "./pages/NoPage";
import { Route, Routes } from "react-router-dom";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
