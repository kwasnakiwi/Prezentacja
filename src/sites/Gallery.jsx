import './../styles/Gallery.css'
import { galleryData } from '../utils/GalleryData.jsx';
import { useNavigate } from 'react-router-dom';

function Gallery(){
  const navigate = useNavigate();

  return(
    <>
      <main className="main-container">
        <header className="gal-header">
          <h1 className="gal-title">PREZENTACJA W OBRAZACH</h1>
        </header>
        <section className="gallery-images">
          {galleryData.map((img, i) => (
            <img key={i} src={img.img} onClick={() => navigate(`/galeria/${img.id}`)} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Gallery