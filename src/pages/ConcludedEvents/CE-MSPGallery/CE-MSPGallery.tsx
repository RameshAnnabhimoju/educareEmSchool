import { SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import './CE-MSPGallery.css'

const MSPGallery = ({images}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: SetStateAction<number>) =>{
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () =>{
    setOpenModal(false);
  }

  const prevSlide = () => {
    slideNumber === 0 ?
     setSlideNumber( images.length - 1) :
     setSlideNumber (slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === images.length ?
     setSlideNumber(1) :
     setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      {openModal &&
          <div className="sliderWrap">
            <a className="btnClose" onClick={handleCloseModal} >&times;</a>
            <a className="btnPrev" onClick={prevSlide} >&#10094;</a>
            <a className="btnNext" onClick={nextSlide}>&#10095;</a>
            <div className='fullScreenImage'>
              <img src={images[slideNumber].img} alt="" />
            </div>
          </div>
      }
      <div className='concluded-events-galleryWarp'>
        {
          images && images.map((slide: { img: string | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) =>{
            return(
              <div
               className='concluded-events-galleryWarp-item'
               key={index}
               onClick={() => handleOpenModal(index)}>
               
              <img src={slide.img} alt="asdasdf" />
              <h6>{slide.text}</h6>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MSPGallery