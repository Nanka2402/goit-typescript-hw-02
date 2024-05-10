import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <div className={css.gallery}>
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
