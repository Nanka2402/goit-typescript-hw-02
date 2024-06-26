import css from "./ImageGallery.module.css";
import ImageCard, { Image } from "./ImageCard/ImageCard";
import PropTypes from "./ImageCard/ImageCard";

export type PropTypes = {
  images: Image[];
  onToggle: (image: Image) => void;
};
export default function ImageGallery({ images, onToggle }: PropTypes) {
  return (
    <div className={css.gallery}>
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} onToggle={onToggle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
