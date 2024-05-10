import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPhoto } from "../Servises/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const per_page = 12;

  const handleSearch = async (searchPhoto) => {
    try {
      setImages([]);
      setError(null);
      setLoading(true);
      const data = await fetchPhoto(1, per_page, searchPhoto);
      setImages(data.results);
      setSearchTerm(searchPhoto);
      setCurrentPage(1);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleLoadMore = async () => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-undef
      const data = await fetchPhoto(currentPage + 1, per_page, searchTerm);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError("Failed to load more images. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          modalIsOpen={true}
          closeModal={closeModal}
          modal={selectedImage.urls.regular}
          description={selectedImage.description}
          likes={selectedImage.likes}
        />
      )}
    </>
  );
}
export default App;
