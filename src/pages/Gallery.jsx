import { useEffect, useRef, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import { GalleryCard } from "../Components/GalleryCard/GalleryCard";
import "./stylesheets/Pages.css";

export function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [currentlyOnDisplay, setCurrentlyOnDisplay] = useState([]);

  const modalRef = useRef();

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("gallery").then((result) => {
      if (componentIsLoaded) setGallery(result.gallery);
    });

    return () => (componentIsLoaded = false);
  }, []);
  return (
    <main className="page-main">
      <h2 className="page-title">Galleri</h2>
      <div className="flex-container">
        {gallery.length > 0
          ? gallery.map((item, index) => {
              return (
                <GalleryCard
                  key={index}
                  images={item.gallery_item.image[0].value}
                  altText={item.gallery_item.alt}
                />
              );
            })
          : "Laddar..."}
      </div>
    </main>
  );
}
