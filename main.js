import './scss/style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

// ASSETS
import imgAboutMe from './assets/images/about-me-default.jpg'
import imgAboutMeColored from './assets/images/about-me-colored.jpg'
import videoPorgy from './assets/video/porgy-1.mp4'

import { setupCounter } from './counter.js'
import Navigation from './js/navigation';
import Animation from './js/animation';
import Scroll from './js/scroll';
import Video from './js/video';

const texts = {
  "aboutMe": {
    "text": "seit sechs Jahren arbeite ich als Softwaree ntwicklerin im Bereich Frontend. Mein Aufgabenbereich umfasst die Anforderungsanalyse, die Konzeption zur technischen Umsetzung sowie die Implementierung von modernen Webtechnologien. Als Hauptverantwortliche für Frontend Themen in einem Projekt stehe ich in ständigem Austausch mit unseren externen Auftraggebern. Von fundamentaler Bedeutung ist die Abstimmung im Team zusammen mit dem Projektmanagement. Dabei habe ich gelernt komplexe, fachspezifische Softwarethemen dem Kunden verständlich zu kommunizieren und die Aufgaben unter Berücksichtigung des Budget- und Zeitrahmens gewinnbringend abzuschließen. Nutzerzentrierte Entwicklung und Konzeption von Anforderungen ist nicht nur fester Bestandteil in unseren Softwareentwicklungsprojekten, sondern war unter anderem Schwerpunkt meines Studiums der Medientechnologie an der technischen Universität Ilmenau. In diesem Bereich, dem Usability- und System Engineering, hat die Interaktion von Mensch und Technik eine entscheidende Rolle gespielt. Besonders spannend fand ich den Einsatz von digitalen Medien und innovativen Technologien als Kommunikationsformat, um Wissen anschaulich zu präsentieren.  In Studienarbeiten hatte ich die Möglichkeit diesbezüglich Erfahrungen zu sammeln. Beispielsweise setzte ich mich in meiner Masterarbeit mit der Game Engine Unity auseinander, um eine App protoypisch zu entwickeln. Während ich in einer Projektarbeit zusammen mit einem Kollegen die Steuerung der Cave (Virtual Reality Umgebung) mittels Flystick (Joystick) durch Gestensteuerung ersetzte. Auch die Produktion eines Films – von der Ideenfindung über Aufnahme bis Schnitt – war Teil meines Studiums. Meine technische Ausbildung und Berufserfahrung ergänzen sich zu meiner Neigung für die kreative und gestalterische Lösung von Problemstellungen. Zum Beispiel bei meinem Auslandspraktikum in Kiew erstellte ich das jährlich erscheinende Magazin der Austauschorganisation IEASTE – inhaltlich und gestalterisch. Als wissenschaftliche Hilfskraft am Gleichstellungsrat der TU Ilmenau ging es in erster Linie darum Ausstellungsplakate zu entwerfen, aber auch bei der Mitorganisation von Veranstaltungen zu unterstützen und durchzuführen. In beiden Projekten habe ich gelernt die Ziele der Organisationen für die Öffentlichkeit zu präsentieren, Inhalte zu recherchieren, wichtige Informationen herauszufiltern und graphisch aufzubereiten. Grundlage dafür war, sich intensiv mit Grafikprogrammen auseinanderzusetzen. Nach meinem Verständnis umfasst Ihr Bereich Digitale Strukturen und Produkte sowie diese Stellenausschreibung genau zwei meiner Stärken: die Kombination aus technischem Verständnis, sowie die kreative und gestalterische Aufbereitung im Team. Die Möglichkeit diese Fähigkeiten in der Kulturarbeit und der Wissensvermittlung anzuwenden, sehe ich als große Chance – um mich weiterzuentwickeln und gleichzeitig meine Qualifikation einzubringen.",
    "btn": "explore me"
  },
  "footer": {
    "copright": "",
    "contact": {
      "name": "Christine Haupt",
      "adress": {
        "street": "Ferdinandstraße 19/2/19",
        "city": "1020 Wien",
        "email": "stini.haupt@gmail.com",
        "insta": "miss_haupt"
      }
    },
    "headline": "get in Touch with Me"
  }
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <!-- HEADER -->
  <header class="header">
      <div class="header__container">
          <a class="header__logo">
              miss<span class="header__logo-bold">haupt</span>
          </a>    
          <nav class="nav js-nav">
              <button class="nav__toggle-btn js-nav-toggle" 
                  type="button"
              >
                  <span class="nav__menu-icon"></span>
              </button>
              <div class="nav__flyout">
                  <ul class="nav__list">
                      <li class="nav__list-item"><a href="#" class="nav__link">nav 1</a></li>
                      <li class="nav__list-item"><a href="#" class="nav__link">veeery veeeeery loooooooooooong navigation title</a></li>
                      <li class="nav__list-item"><a href="#" class="nav__link">nav n</a></li>
                  </ul>
              </div>
          </nav>
      </div>
  </header>

  <!-- MAIN -->
  <main class="main">
      <section class="section hero">
          <!-- 
              GAME
              MAYBE EXPERIMENTING WITH THREE.js
          -->
      </section>

      <section class="section project-1">
          
      </section>

      <section class="section project project--grid-1 project--pupppet-dance" id="puppet-dance">
          <!-- 
              PROJECTS:
              interactive systems (puppet dance, dancing alien (allien under water, allien in the sky), kinetic scultpure)
              digital theremin, face and body tracking EXAMPLE???
              audioreactive visualization (why, examples, shows) 10examples small videos of my visuals + userInterface for REALTIME control
              importance of the shows to use the room 
              artificial insects (theme )

              MOTIVATION:
              why? where do i want to go? relation to s.th.

              CV
          -->
          <div class="project__tile project__tile-1">

          </div>
          <div class="project__tile project__tile-2"></div>
          <div class="project__tile project__tile-3"></div>
          <div class="project__tile project__tile-4"></div>
          <div class="project__tile project__tile-5">
              <video controls="false" width="250" class="video">
                  <source src="${videoPorgy}" type="video/mp4" />
              </video>
          </div>
      </section>
      <section class="section about-me" id="about-me">
          <div class="about-me__col about-me__col--content">
              <h2 class="about-me__headline">about<span>me</span></h2>
              <p class="about-me__text">
                ${texts.aboutMe.text}
                 </p>
                  <button>explore more</button>
                  <div class="about-me__diagramm">        
                      <!-- Was mach mich aus? Wohin will ich? warum will ich nochoal studieren? IKIGAI -->
                  </div>
          </div>
          <div class="about-me__col about-me__col--image">                
              <img src="${imgAboutMeColored}" alt="inside me 1" class="about-me__img about-me__img--1 js-inside-me-1" />
              <img src="${imgAboutMe}" alt="inside me 2" class="about-me__img about-me__img--2 js-inside-me-2" />
          </div>
      </section>
  </main>
  <footer class="footer">
      <div class="footer__top">
          <h2 class="footer__headline">Contact<span>Me</span></h2>
          <ul class="footer__contact">
              <li class="footer__link-list-item">
                  Christine Haupt
              </li>
              <li class="footer__link-list-item">                
                  <a href="mailto:stini.haupt@gmail.com" class="footer__link footer__link--mail">stini.haupt@gmail.com</a>
              </li>
              <li class="footer__link-list-item">
                  <a href="instagram/miss_haupt" class="footer__link footer__link--instagram">instagram miss_haupt</a>
              </li>
              <li class="footer__link-list-item">
                  <a href="tel:00491785570196" class="footer__link footer__link--phone">0049 178 55 70 196</a>
              </li>
          </ul>
      </div>
      <div class="footer__bottom">
          <p class="footer__bottom-copyright">&copy; 2024 Christine Haupt</p>
      </div>
  </footer>
`
const init = () => {
    const navigation = new Navigation();
    navigation.init();

    const scroll = new Scroll();
    scroll.init();

    const animation = new Animation();
    animation.init();

    const video = new Video();
    video.init();
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});

setupCounter(document.querySelector('#counter'))
