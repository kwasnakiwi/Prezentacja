import { useEffect, useState } from 'react'
import './../styles/Presentation.css'
import { useLocation, useNavigate } from 'react-router-dom'

import pr1 from "./../assets/images/gal5.jpg";
import pr2 from "./../assets/images/slajd6.jpg";
import pr3 from "./../assets/images/slajd11.jpg";
import pr4 from "./../assets/images/slajd13.jpg";
import pr5 from "./../assets/images/slajd19.jpg"

function Presentation(){
  const location = useLocation();
  const navigate = useNavigate();
  const numberOfSlides = 21;
  const params = new URLSearchParams(location.search);
  const initialSlide = Number(params.get("slide")) || 1;

  const [slide, setSlide] = useState(initialSlide);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSlide((prev) =>
          prev + 1 > numberOfSlides ? 1 : prev + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setSlide((prev) =>
          prev - 1 < 1 ? 1 : prev - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    navigate(`?slide=${slide}`, { replace: true });
  }, [slide, navigate]);


  return(
    <>
      <main className="main-container presentation">
        <div className="slides">
          {slide === 1 &&
            <section className="presentation-slide" id="slide1">
              <h1 className="presentation-title">Berlin | <span style={{color: "var(--accent)"}}>Urban Exploration</span></h1>
              <h2 className="presentation-subtitle">
                Berlin: Nowoczesna Metropolia Kompleksowy przewodnik po stolicy 
                technologii, sztuki i innowacji. Poznaj miasto z perspektywy 
                generacji Z.
              </h2>
            </section>
          }
          {slide === 2 &&
            <section className="presentation-slide" id="slide2">
              <p className="presentation-slide-desc">
                Berlin to jeden z najważniejszych punktów na mapie Europy. 
                To miasto, które połączyło trudną historię z futurystyczną 
                wizją rozwoju. Podczas tej prezentacji dowiesz się, jak 
                zaplanować wyjazd, który skupia się na tym, co w Berlinie 
                najbardziej progresywne: technologii, nowoczesnej architekturze 
                i unikalnej kulturze miejskiej.
              </p>
              <h2 className="presentation-slide-title">Wprowadzenie</h2>
              <img src={pr1} alt="Zdjecie 1" />
            </section>
          }
          {slide === 3 &&
            <section className="presentation-slide" id="slide3">
              <h2 className="presentation-slide-title">Agenda spotkania</h2>
              <p className="presentation-slide-desc">
                <b>Treść:</b><br />
                - <b>Logistyka:</b> Strategie transportu i optymalizacja kosztów noclegu.<br />
                - <b>Innovation Hub:</b> Futuryzm, technologia i nowoczesna architektura Berlina.<br />
                - <b>Interactive History:</b> Muzeum Szpiegostwa jako przykład nowoczesnej edukacji.<br />
                - <b>Practical Guide:</b> Narzędzia cyfrowe i lifehacki ułatwiające poruszanie się po mieście.
              </p>
            </section>
          }
          {slide === 4 &&
            <section className="presentation-slide" id="slide4">
              <h2 className="presentation-slide-title">Przygotowania do wyjazdu</h2>
              <p className="presentation-slide-desc">
                <b>Kolej (ICE/EIC):</b> Najbardziej ekologiczny i efektywny sposób dotarcia do Berlina (bezpośrednie połączenia z największych miast Polski).<br />
                <b>Autokary:</b> Budżetowa alternatywa z dobrze rozwiniętą siatką połączeń (Berlin ZOB).<br />
                <b>Mobilność na miejscu:</b> Rekomendujemy korzystanie z transportu publicznego zamiast samochodu ze względu na strefy niskiej emisji (Umweltzone).
              </p>
            </section>
          }
          {slide === 5 && 
            <section className="presentation-slide" id="slide5">
              <h2 className="presentation-slide-title">Transport i logistyka</h2>
              <p className="presentation-slide-desc">
                <b>Design Hostels:</b> Miejsca takie jak <i>Circus</i> czy <i>Generator</i> oferują standard hotelowy w klimacie nastawionym na networking.<br />
                Kluczowe dzielnice:<br />
                - Mitte: Bliskość głównych atrakcji.<br />
                - Friedrichshain: Centrum alternatywnej kultury i sztuki ulicznej.<br />
                - Prenzlauer Berg: Bezpieczna, estetyczna dzielnica z najlepszą infrastrukturą kawiarnianą.
              </p>
            </section>
          }
          {slide === 6 && 
            <section className="presentation-slide" id="slide6">
              <p className="presentation-slide-desc">
                <b>Dokumenty:</b> Ważny dowód osobisty oraz karta EKUZ (ubezpieczenie zdrowotne).<br />
                <b>Płatności:</b> Berlin staje się coraz bardziej bezgotówkowy, ale warto mieć przy sobie nieco euro na mniejsze punkty (tzw. Spätis).<br />
                <b>Ekwipunek:</b> Powerbank o dużej pojemności oraz aplikacja map offline.
              </p>
              <h2 className="presentation-slide-title">Baza noclegowa: Wybór lokalizacji</h2>
              <img src={pr2} alt="Zdjecie 2" />
            </section>
          }
          {slide === 7 && 
            <section className="presentation-slide" id="slide7">
              <h2 className="presentation-slide-title">Przygotowanie techniczne i dokumentacja</h2>
              <p className="presentation-slide-desc">
                Nie zapomnij dowodu osobistego lub paszportu, a także wygodnych 
                ubrań i butów. Spakuj też ładowarkę, powerbank i drobne przekąski. 
                Przygotuj się na różne warunki pogodowe i miej przy sobie 
                podstawowe artykuły higieniczne.
              </p>
            </section>
          }
          {slide === 8 && 
            <section className="presentation-slide" id="slide8">
              <h2 className="presentation-slide-title">Nowoczesne Oblicze Berlina</h2>
              <p className="presentation-slide-desc">
                To interaktywne centrum wystawowe dedykowane pytaniu: Jak chcemy żyć w przyszłości?<br />
                - <b>Wystawa:</b> Prezentuje rozwiązania z zakresu ekologii, robotyki i inżynierii społecznej.<br />
                - <b>Futurium Lab:</b> Miejsce, gdzie można przetestować nowoczesne technologie (druk 3D, laser cutting).<br />
                - <b>Architektura:</b> Budynek sam w sobie jest przykładem nowoczesnego, zrównoważonego designu.
              </p>
            </section>
          }
          {slide === 9 && 
            <section className="presentation-slide" id="slide9">
              <h2 className="presentation-slide-title">Futurium: Dom Przyszłości</h2>
              <p className="presentation-slide-desc">
                Wielowymiarowa instalacja w dawnej fabryce, która redefiniuje pojęcie muzeum.<br />
                - <b>Doświadczenie:</b> Siedem sal z instalacjami świetlnymi i dźwiękowymi.<br />
                - <b>Technologia:</b> Wykorzystanie zaawansowanych algorytmów i systemów kinetycznych do tworzenia cyfrowych rzeźb.<br />
                - <b>Wartość:</b> Idealne miejsce dla fanów nowych mediów i futurystycznej estetyki.
              </p>
            </section>
          }
          {slide === 10 && 
            <section className="presentation-slide" id="slide10">
              <h2 className="presentation-slide-title">Dark Matter: Fuzja technologii i sztuki</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 11 &&
            <section className="presentation-slide" id="slide11">
              <p className="presentation-slide-desc">
                Warto odwiedzić Bramę Brandenburską – symbol niepodległości i 
                jedną z ikon Berlina. Drugim ważnym miejscem jest Mur Berliński, 
                który przypomina o podziale miasta i historii zimnej wojny. 
                To dwa punkty obowiązkowe, które łączą młodzież z przeszłością 
                w ciekawy sposób.
              </p>
              <h2 className="presentation-slide-title">Baza noclegowa: Wybór lokalizacji</h2>
              <img src={pr3} alt="Zdjecie 3" />
            </section>
          }
          {slide === 12 && 
            <section className="presentation-slide" id="slide12">
              <h2 className="presentation-slide-title">Interaktywna Wiedza i Kultura</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 13 &&
            <section className="presentation-slide" id="slide13">
              <p className="presentation-slide-desc">
                Warto odwiedzić Bramę Brandenburską – symbol niepodległości i 
                jedną z ikon Berlina. Drugim ważnym miejscem jest Mur Berliński, 
                który przypomina o podziale miasta i historii zimnej wojny. 
                To dwa punkty obowiązkowe, które łączą młodzież z przeszłością 
                w ciekawy sposób.
              </p>
              <h2 className="presentation-slide-title">German Spy Museum</h2>
              <img src={pr4} alt="Zdjecie 4" />
            </section>
          }
          {slide === 14 && 
            <section className="presentation-slide" id="slide14">
              <h2 className="presentation-slide-title">Street Art i Digital Art</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 15 && 
            <section className="presentation-slide" id="slide15">
              <h2 className="presentation-slide-title">Historyczne Punkty Obowiązkowe</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 16 && 
            <section className="presentation-slide" id="slide16">
              <h2 className="presentation-slide-title">Praktyczne Wskazówki</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 17 && 
            <section className="presentation-slide" id="slide17">
              <h2 className="presentation-slide-title">Transport Miejski</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 18 && 
            <section className="presentation-slide" id="slide18">
              <h2 className="presentation-slide-title">Bezpieczeństwo i Komunikacja</h2>
              <p className="presentation-slide-desc">
                Symbol transformacji Berlina w nowoczesną metropolię.<br />
                - <b>Inżynieria:</b> Imponująca stalowo-szklana konstrukcja dachu imitująca górę Fudżi.<br />
                - <b>Klimat:</b> Biznesowe serce miasta z licznymi showroomami technologicznymi i kinami IMAX.<br />
                - <b>Funkcja:</b> Przykład rewitalizacji przestrzeni miejskiej po upadku Muru Berlińskiego.
              </p>
            </section>
          }
          {slide === 19 &&
            <section className="presentation-slide" id="slide19">
              <p className="presentation-slide-desc">
                Warto odwiedzić Bramę Brandenburską – symbol niepodległości i 
                jedną z ikon Berlina. Drugim ważnym miejscem jest Mur Berliński, 
                który przypomina o podziale miasta i historii zimnej wojny. 
                To dwa punkty obowiązkowe, które łączą młodzież z przeszłością 
                w ciekawy sposób.
              </p>
              <h2 className="presentation-slide-title">Budgeting & Lifestyle</h2>
              <img src={pr5} alt="Zdjecie 5" />
            </section>
          }
          {slide === 20 && 
            <section className="presentation-slide" id="slide20">
              <h2 className="presentation-slide-title">Podsumowanie</h2>
              <p className="presentation-slide-desc">
                Berlin to miasto pełne historii, kultury i niespodzianek 
                idealne dla młodych podróżników. Przygotuj się dobrze, wybierz 
                ciekawe miejsca do zwiedzania i korzystaj z lokalnej atmosfery. 
                Dzięki praktycznym poradom Twój wyjazd będzie łatwy, bezpieczny
                i pełen niezapomnianych wrażeń.
              </p>
            </section>
          }
          {slide === 21 &&
            <section className="presentation-slide" id="slide21">
              <h1 className="presentation-title">Berlin | <span style={{color: "var(--accent)"}}>Urban Exploration</span></h1>
              <h2 className="presentation-subtitle">
                Berlin: Nowoczesna Metropolia Kompleksowy przewodnik po stolicy 
                technologii, sztuki i innowacji. Poznaj miasto z perspektywy 
                generacji Z.
              </h2>
            </section>
          }
        </div>
      </main>
    </>
  )
}

export default Presentation