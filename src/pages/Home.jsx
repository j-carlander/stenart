import { useEffect, useState } from "react";
import { fetchFromRoute } from "../services/fetchData";
import "./stylesheets/Pages.css";
import previewDB from "../config/__mocks__/previewDB";

export function Home() {
  const [presentation, setPresentation] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("home")
      .then((data) => {
        if (componentIsLoaded) {
          setImageSrc(data.hero.image.value);
          setPresentation(data.hero.presentation.value);
        }
      })
      .catch((err) => {
        if (componentIsLoaded) {
          console.log(err);
          setImageSrc(previewDB.home.hero.image.value);
          setPresentation(previewDB.home.hero.presentation.value);
        }
      });

    return () => (componentIsLoaded = false);
  }, []);

  return (
    <main className="page-main">
      {presentation ? (
        <div className="flex-container">
          <img className="hero-img" src={imageSrc} alt="" />
          <p className="hero-pres">{presentation}</p>
        </div>
      ) : (
        "Laddar..."
      )}
    </main>
  );
}
