import { useNavigate } from 'react-router-dom'
import './../styles/HomePage.css'

function HomePage(){

  const navigate = useNavigate();

  const sections = [
    {
      title: "O czym będzie prezentacja?", 
      desc: "Prezentacja będzie o wycieczce do Berlina i jest robiona z myślą o nastolatkach. Pokaże ciekawe miejsca i atrakcje, które faktycznie mogą nas zainteresować - nowoczesne przestrzenie, miejski klimat i rzeczy, które wyróżniają Berlin. Bez nudy i zbędnych informacji, tylko to, co naprawdę warto zobaczyć."
    },
    {
      title: "Jaka będzie prezentacja?",
      desc: "Nowoczesna i elegancka. Minimalistyczny design, czytelna typografia i spójna kolorystyka sprawią, że całość będzie wyglądać profesjonalnie i lekko. Prezentacja skupi się na treści i doświadczeniu użytkownika - bez zbędnych elementów, za to z dbałością o detale i estetykę."
    },
    {
      title: "Dlaczego aplikacja webowa?",
      desc: "Aplikacja webowa daje twórcom projektu dużą swobodę. Pozwala rozwijać pomysły bez ograniczeń jednego urządzenia czy systemu i daje praktycznie nieograniczone możliwości rozbudowy. Można ją łatwo zmieniać, ulepszać i dostosowywać do nowych pomysłów."
    },
  ]

  return(
    <>
      <main className="main-container">
        <header className="about-header">
          <h1 className="about-title">BERLIN</h1>
          <span className="middle-text">miasto, które chcemy zobaczyć.</span>
          <span className="under-text">Prezentacja</span>
        </header>
        <section className="about-sections">
          {sections.map((sect, i) => (
            <section key={i} className="about-section">
              <h2 className="about-question">{sect.title}</h2>
              <p className="about-desc">{sect.desc}</p>
            </section>
          ))}
        </section>
        <div className="about-btn-box">
          <button className="to-presentation" onClick={() => navigate("/prezentacja")}>Zobacz prezentację</button>
        </div>
      </main>
    </>
  )
}

export default HomePage