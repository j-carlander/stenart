import "./GalleryCard.css";

export function GalleryCard({ preview, altText, images, handleImgClick }) {
  return (
    <figure className="gallery-card">
      {images.length > 1 && <p className="gallery-multi-sym">&#10064;</p>}
      <img
        className="gallery-card-img"
        src={preview}
        alt={altText.value}
        onClick={() => handleImgClick(images)}
      />
    </figure>
  );
}
