import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({
  modalIsOpen,
  closeModal,
  modal,
  description,
  likes,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={modal} alt={description} />
        <div className={css.box}>
          <p>
            <span className={css.color}>Description:</span> {description}
          </p>
          <p>
            <span className={css.color}>Likes:</span> {likes}
          </p>
        </div>
      </div>
    </Modal>
  );
}
