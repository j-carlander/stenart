import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import { GalleryCard } from "../Components/GalleryCard/GalleryCard";
import "./stylesheets/Pages.css";

export function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchFromRoute("gallery").then((result) => setGallery(result.gallery));
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
          : ""}
      </div>
    </main>
  );
}
