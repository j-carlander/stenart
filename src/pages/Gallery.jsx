import { useEffect, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import { GalleryCard } from "../Components/GalleryCard/GalleryCard";

export function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchFromRoute("gallery").then((result) => setGallery(result.gallery));
  }, []);
  return (
    <main>
      <h2>Galleri</h2>
      <div className="grid-container">
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
