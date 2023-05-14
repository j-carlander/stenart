import { useEffect, useRef, useState } from "react";
import { fetchFromRoute } from "../fetchData/fetchData";
import { GalleryCard } from "../Components/GalleryCard/GalleryCard";
import "./stylesheets/Pages.css";
import { DisplayCase } from "../Components/DisplayCase/DisplayCase";

export function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [onDisplay, setOnDisplay] = useState([]);

  const modalRef = useRef();

  useEffect(() => {
    let componentIsLoaded = true;

    fetchFromRoute("gallery").then((result) => {
      if (componentIsLoaded) setGallery(result.gallery);
    });

    return () => (componentIsLoaded = false);
  }, []);

  function handleImgClick(images) {
    setOnDisplay(images);
    modalRef.current.showModal();
  }
  return (
    <main className="page-main">
      <h2 className="page-title">Galleri</h2>
      <div className="flex-container">
        {gallery.length > 0
          ? gallery.map((item, index) => {
              return (
                <GalleryCard
                  key={index}
                  preview={item.gallery_item.image[0].value}
                  altText={item.gallery_item.alt}
                  images={item.gallery_item.image}
                  handleImgClick={handleImgClick}
                />
              );
            })
          : "Laddar..."}
      </div>
      <DisplayCase onDisplay={onDisplay} modalRef={modalRef} />
    </main>
  );
}
