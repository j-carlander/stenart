import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import "./stylesheets/Pages.css";

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
    <main className="page-main">
      <img className="hero-img" src={imageSrc} alt="" />
      <p className="hero-pres">{presentation}</p>
    </main>
  );
}
