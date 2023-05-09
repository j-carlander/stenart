import "./GalleryCard.css";

export function GalleryCard({ images, altText }) {
  return (
    <div className="gallery-card">
      <img className="gallery-card-img" src={images} alt={altText.value} />
    </div>
  );
}
