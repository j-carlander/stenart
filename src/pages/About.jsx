import { useEffect, useState } from "react";
import { fetchFromRoute } from "../services/fetchData";

import "./stylesheets/Pages.css";
import previewDB from "../config/__mocks__/previewDB";

export function About() {
  const [about, setAbout] = useState({});
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("about")
      .then((result) => {
        if (componentIsLoaded) {
          setAbout(result.mainContent);
          setProfilePic(result.relatedImage.value);
        }
      })
      .catch((err) => {
        if (componentIsLoaded) {
          console.log(err);
          setAbout(previewDB.about.mainContent);
          setProfilePic(previewDB.about.relatedImage.value);
        }
      });
    return () => (componentIsLoaded = false);
  }, []);
  return (
    <main className="page-main">
      <h2 className="page-title">Om mig</h2>
      {Object.keys(about).length > 0 ? (
        <div className="flex-container">
          <p>{about?.introduction?.value}</p>
          <img src={profilePic} alt="" className="about-profile-img" />
          <p className="about-body">{about?.short?.value}</p>
        </div>
      ) : (
        "Laddar..."
      )}
    </main>
  );
}
