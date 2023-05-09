import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";

import "./stylesheets/Pages.css";

export function About() {
  const [about, setAbout] = useState({});
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("about").then((result) => {
      if (componentIsLoaded) {
        setAbout(result.mainContent);
        setProfilePic(result.relatedImage.value);
      }
    });
    return () => (componentIsLoaded = false);
  }, []);
  return (
    <main className="page-main">
      <h2 className="page-title">Om mig</h2>
      <div className="flex-container">
        <img src={profilePic} alt="" />
        <p>{about?.introduction?.value}</p>
      </div>
      <p>{about?.body?.value}</p>
    </main>
  );
}
