import { useState } from "react";
import "./MSPGallery.css";
type imagesType = {
  text: string; img: string 
}[];
const MSPGallery = ({ images }: { images: imagesType }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
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
      <div className="if-galleryWarp">
        {images &&
          images.map((slide, index) => {
            return (
              <div
                className="if-single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="asdasdf" className={slide.text.length == 0 ?"IF-images":"IF-images-with-text"}/>
                {slide.text.length > 0 ? <h6>{slide.text}</h6>
                                    : "" } 
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MSPGallery;
