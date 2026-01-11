import './../styles/Gallery.css'
import { galleryData } from '../utils/GalleryData.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowRight as ArrowRight, FaArrowLeft as ArrowLeft } from 'react-icons/fa';
import { BiX as XMark } from 'react-icons/bi';

function GalleryDetails(){
  const { id } = useParams();
  const navigate = useNavigate();
  const image = galleryData.find(img => img.id === Number(id));

  if (!image) return <main className="main-container">
    <p className='error'>Nie znaleziono zdjęcia</p>
    </main>

  return(
    <>
      <main className="main-container">
        <section className="image-wrapper">
          <ArrowLeft className="icon back" onClick={() => Number(id) === 1 ? navigate("/galeria") : navigate(`/galeria/${Number(id) - 1}`)} />
          <img className="big-image" src={image.img} alt={image.title} />
          <div className="image-details">
            <XMark className='icon x-mark' onClick={() => navigate("/galeria")} />
            <h2 className="image-title">{image.title}</h2>
            <p className="image-desc">{image.desc}</p>
            <button 
              onClick={() => navigate(`/galeria/${Number(id) + 1 > galleryData.length ? 1 : Number(id) + 1}`)} 
              className="next-image"
            >
              Przejdź dalej <ArrowRight className='icon' />
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default GalleryDetails