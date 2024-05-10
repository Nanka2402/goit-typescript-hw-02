import css from "./ImageCard.module.css";

export default function ImageCard({
  image: { urls, likes, description },
  openModal,
}) {
  const handleImageClick = () => {
    openModal({
      urls,
      likes,
      description,
    });
  };
  return (
    <div className={css.imageContainer}>
      <img
        width={350}
        src={urls.small}
        alt="photo"
        onClick={handleImageClick}
      />
    </div>
  );
}
