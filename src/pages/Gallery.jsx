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
      const skulpturer = {
        title: "Skulpturer",
        images: result.skulpturer,
      };
      const akvareller = {
        title: "Akvareller",
        images: result.akvareller,
      };
      console.log(result);
      if (componentIsLoaded) setGallery([skulpturer, akvareller]);
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

      {gallery.length > 0
        ? gallery.map((category, index) => {
            return (
              <section>
                <h3 className="page-subtitle">{category.title}</h3>
                <div className="flex-container gallery-container">
                  {category.images.map((item, imgIndex) => {
                    return (
                      <GalleryCard
                        key={index + "_" + imgIndex}
                        preview={item.gallery_item.images[0].value}
                        altText={item.gallery_item.alt}
                        images={item.gallery_item.images}
                        handleImgClick={handleImgClick}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })
        : "Laddar..."}

      <DisplayCase onDisplay={onDisplay} modalRef={modalRef} />
    </main>
  );
}
