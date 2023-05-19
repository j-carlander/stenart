import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";

import "./stylesheets/Pages.css";

export function About() {
  const [about, setAbout] = useState({});
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("about").then((result) => {
      console.log(result);
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
        <p>{about?.introduction?.value}</p>
        <img src={profilePic} alt="" className="about-profile-img" />
        <p className="about-body">{about?.short?.value}</p>
      </div>
    </main>
  );
}
