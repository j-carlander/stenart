import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import "./stylesheets/Home.css";

export function Home() {
  const [presentation, setPresentation] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    fetchFromRoute("home").then((data) => {
      setImageSrc(data.hero.image.value);
      setPresentation(data.hero.presentation.value);
    });
  }, []);

  return (
    <main className="home-main">
      <img src={imageSrc} alt="" />
      <p>{presentation}</p>
    </main>
  );
}
