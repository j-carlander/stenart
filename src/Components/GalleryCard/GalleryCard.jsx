import "./GalleryCard.css";

export function GalleryCard({ preview, altText, images, handleImgClick }) {
  return (
    <figure className="gallery-card">
      <img
        className="gallery-card-img"
        src={preview}
        alt={altText.value}
        onClick={() => handleImgClick(images)}
      />
    </figure>
  );
}
