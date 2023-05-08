import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";

export function Home() {
  const [presentation, setPresentation] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    fetchFromRoute("home").then((data) => {
      console.log("img: ", data.hero.image.value);
      setImageSrc(data.hero.image.value);
      setPresentation(data.hero.presentation.value);
    });
  }, []);

  return (
    <article>
      <img src={imageSrc} alt="" />
      <p>{presentation}</p>
    </article>
  );
}
