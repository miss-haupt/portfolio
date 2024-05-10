import './scss/style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

// ASSETS
import imgAboutMe from './assets/images/about-me-default-edited.jpg';
import imgAboutMeColored from './assets/images/about-me-colored.jpg';
import videoPorgy from './assets/video/porgy-1.mp4';

import Navigation from './js/navigation';
import ExamineOnHover from './js/examine-on-hover';
import Eyes from './js/eyes';
import Popup from './js/popup';
import HeadlineAnimation from './js/headline-animation';
import Scroll from './js/scroll';
import Video from './js/video';

const texts = {
  "aboutMe": {
    "text": "<p class='intro'>born 19.06.1990 in Regensburg, Germany</p><h3>Education</h3><div><div class='year'>2014-2017</div><div class='stuff'>Study of Media Technology (M.Sc.) <span>Tu Ilmenau</span></div><div class='description'><span>Thesis topic</span>Development and Evaluation of a Spatial AR Dashboard Personalizable with a Mobile Application</div></div><div><div class='year'>2009-2014</div><div class='stuff'>Study of Media Technology (B.Sc.) <span>Tu Ilmenau</span></div><div class='description'><span>Thesis topic</span>Systematic Analysis of the Distribution Channels of Internet TV Services</div></div><div><div class='year'>2000-2009</div><div class='stuff'>Allgemeine Hochschulreife <span>Albrecht-Altdorfer Gymnasium</span></div><div class='description'>Leistungskurse Mathe und Kunst</div></div><h3>Working experience</h3><div><div class='year'>2022-until now</div><div class='stuff'>Frontend Developer</div></div><div><div class='year'>2018-2022</div><div class='stuff'>Frontend Developer</div></div><h3>Residency and Performances</h3><div><div class='year'>2023</div><div class='stuff'>Artists in Residency</div></div>",
    "textImage": "We all bleed<br>the same color",
    "popupOpen": "about this",
    "popupClose": "close",
    "popupContent": "this Grafic is a digital collage, the orignal image is created with an AR-filter, created with a face filter painted in Proceate and created with Microsoft ARSpark. The hover effect is a small web gimic implemented with JavaScript."
  },
  "backToTop": "back to top",
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
    "headline": "Take what you <span>need</span>"
  }
}

document.querySelector('#app').innerHTML = `
<!-- TODO: REMOVE  
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
  </div> -->

  <!-- HEADER -->
  <header class="header">
      <div class="header__container">  
          <nav class="nav js-nav">
            <ul class="nav__list">
                <li class="nav__list-item"><a href="#" class="nav__link">Motivation</a></li>
                <li class="nav__list-item"><a href="#" class="nav__link">Selected Projects</a></li>
                <li class="nav__list-item"><a href="#" class="nav__link">Random Projects</a></li>
                <li class="nav__list-item"><a href="#about-me" class="nav__link">CV</a></li>
                <li class="nav__list-item"><a href="#contact" class="nav__link">Contact</a></li>
            </ul>
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
                <div class="about-me__text">
                    ${texts.aboutMe.text}
                </div>
            </div>
            <div class="about-me__col about-me__col--image">    
                <div class="about-me__col--text">
                    ${texts.aboutMe.textImage}
                </div>

                <img src="${imgAboutMeColored}" alt="inside me 1" class="about-me__img about-me__img--1 js-inside-me-1" />
                <img src="${imgAboutMe}" alt="inside me 2" class="about-me__img about-me__img--2 js-inside-me-2" />
            
                <div class="popup"> 
                    <button class="about-me__button popup__button">${texts.aboutMe.popupOpen}</button>
                    <div class="popup__content"> 
                        <button class="popup__close">${texts.aboutMe.popupClose}</button>
                        <p>${texts.aboutMe.popupContent}</p>
                    </div>
                </div>
            </div>
        </section>
        <button class="back-to-top" type="button" title="${texts.backToTop}">^</button>   
    </main>
  <footer class="footer" id="contact">
      <div class="footer__top">
            <h2 class="footer__headline">${texts.footer.headline}</h2>
            <div class="face">
                <div class="face__eye face__eye--left">    
                    <div class="face__eye-pupil face__eye-pupil--left">
                    </div>
                </div>
                <div class="face__eye face__eye--right">
                    <div class="face__eye-pupil face__eye-pupil--right">
                    </div>
                </div>
            </div>
            <div class="footer__zettel-list">
                <button class="footer__audio-toggle" type="button" title="sound on/off">&#x1F50A;</button>

                <a data-id="yes" class="footer__zettel-list-item" data-text="yes, you're in, christine" href="mailto:stini.haupt@gmail.com?body=yes!">
                    send christine a sms
                </a>
                <a data-id="talk" class="footer__zettel-list-item" data-text="let's have a personal talk" href="mailto:stini.haupt@gmail.com?body=talk!">
                    send christine a sms
                </a>
                <a data-id="maybe" class="footer__zettel-list-item" data-text="maybe baby" href="mailto:stini.haupt@gmail.com?body=maybe!">
                    send christine a sms
                </a>
                <a data-id="no" class="footer__zettel-list-item" data-text="no - no comments" href="mailto:stini.haupt@gmail.com?body=no!">
                    send christine a sms
                </a>
                <a data-id="no-shit" class="footer__zettel-list-item" data-text="no your portfolio is shit" href="mailto:stini.haupt@gmail.com?body=noItsShit!">
                    send christine a sms
                </a>
            </div>
      </div>
    <div class="footer__bottom">
        <ul class="footer__contact footer__link-list">
            <li class="footer__link-list-item">
                &copy; 2024 Christine Haupt
            </li>
            <li class="footer__link-list-item">                
                <a href="mailto:stini.haupt@gmail.com" class="footer__link footer__link--mail">stini.haupt@gmail.com</a>
            </li>
            <li class="footer__link-list-item">
                <a href="https://www.instagram.com/miss_haupt/" target="_blank" class="footer__link footer__link--instagram">instagram miss_haupt</a>
            </li>
            <li class="footer__link-list-item">
                <a href="tel:00491785570196" class="footer__link footer__link--phone">0049 178 55 70 196</a>
            </li>
        </ul>
    </div>
  </footer>
`
const init = () => {
    const navigation = new Navigation();
    navigation.init();

    const scroll = new Scroll();
    scroll.init();

    const examineOnHover = new ExamineOnHover();
    examineOnHover.init();

    const popup = new Popup();
    popup.init();

    const video = new Video();
    video.init();

    const headlineAnimation = new HeadlineAnimation();
    headlineAnimation.init();

    const eyes = new Eyes();
    eyes.init();
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});
