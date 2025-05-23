import { SetStateAction, useState } from "react";
import "./CE-MSPGallery.css";
type imagesType = { img: string }[];
const MSPGallery = ({ images }: { images: imagesType }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: SetStateAction<number>) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(1)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <a className="btnClose" onClick={handleCloseModal}>
            &times;
          </a>
          <a className="btnPrev" onClick={prevSlide}>
            &#10094;
          </a>
          <a className="btnNext" onClick={nextSlide}>
            &#10095;
          </a>
          <div className="fullScreenImage">
            <img src={images[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      <div className="concluded-events-galleryWarp">
        {images &&
          images.map((slide, index: number) => {
            return (
              <div
                className="concluded-events-galleryWarp-item"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="asdasdf" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MSPGallery;
