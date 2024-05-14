import './scss/style.scss'
import viteLogo from '/vite.svg'

// ASSETS
import imgAboutMe from './assets/images/about-me-default-edited.jpg';
import imgAboutMeColored from './assets/images/about-me-colored.jpg';
import bgGrid from './assets/images/grid.png';
import bgGridSquare from './assets/images/grid-square.png';
import introDiagram from './assets/images/thingsIFocusOn.png';
import kineticVestDiagram from './assets/images/kinetic-vest/kineticVestTechnicalSketch.png';
import puppetDiagram from './assets/images/puppet/puppetTechnicalSketch.png';

import showReel1 from './assets/video/randomExperiments/generativeInsect.mp4';
import showReel2 from './assets/video/randomExperiments/tdMeetupShort.mp4';
import showReel3 from './assets/video/randomExperiments/faceTracking.mp4';
import showReel4 from './assets/video/randomExperiments/galaxies.mp4';
import showReel5 from './assets/video/randomExperiments/singing-cat.mp4';
import showReel6 from './assets/video/randomExperiments/generativeForms.mp4';
import showReel7 from './assets/video/randomExperiments/machineVisualization.mp4';
import showReel8 from './assets/video/randomExperiments/mechanicalInsectPainting.mp4';
import showReel9 from './assets/video/randomExperiments/digitalTheremin.mp4';
import showReel10 from './assets/video/randomExperiments/rotlicht.mp4';
import showReel11 from './assets/video/randomExperiments/double.mp4';
import showReel12 from './assets/video/randomExperiments/lifePleasures.mp4';

import mouthHEVC from './assets/video/hero/mouth-hevc-safari.mp4';
import mouthWEBM from './assets/video/hero/mouth-vp9-chrome.webm';

import kineticVestSketch from './assets/video/kineticVestSketch.mp4';
import videoPorgy from './assets/video/porgy-1.mp4';
import videoPorgyFlyer from './assets/video/randomExperiments/machineWoman.mp4';

import Navigation from './js/navigation';
import ExamineOnHover from './js/examine-on-hover';
import Eyes from './js/eyes';
import Popup from './js/popup';
import HeadlineAnimation from './js/headline-animation';
import Scroll from './js/scroll';
import Video from './js/video';
import Hero from './js/hero';
import ThreeScene from './js/threeScene';
import Motivation from './js/motivation';

const texts = {
    "heroHeadline": "Dive <span>into my world</span>",
    "heroHeadlineHello": "Hel<span>lo</span>",
    "intro": {
        "short": "<span>I'm Christine. Do you know that feeling when you want to</span> change <span>something about yourself,</span> evolve<span>, and</span> discover <span>what brings you joy? Scroll down and see how I'm currently trying it out</span>",
        "hint": "things i focus on",
        "btn": "read my full motivation",
        "fullMotivation": "My background is in Media Technology. I studied at the University of Technology in Ilmenau, where I gained a solid understanding of technological theory. Topics such as Human-Machine Interaction were central, but focusing on methodology and engineering. However, I felt a lack of practical and artistic engagement, such as hands-on building, crafting, and the freedom to imagine and develop new ideas. Honestly, my focus at that time was on learning and understanding these theoretical things, and I couldn't yet apply my knowledge to creative, technical projects. <br><br>After the studies I've been working as a web developer, for the past six years. In this role, I've honed my debugging and coding skills, applying my technical knowledge to software development. It's a great job, but it lacks the freedom for creative work and feels limited. So in my free time, I try to apply my technical skills to personal projects and explore creative avenues. However, I want to do more in this direction; I want to continue learning and an important aspect for me is: I want to make something meaningful.  That's why I'm considering returning to study. The interdisciplinary approach appeals to me greatly, and I'm particularly drawn to the concept of teamwork and collaborative projects. So I would be thrilled to be part of it.<br><br>I find it particularly exciting  to harmonize various layers: technology and human interaction within space/environment, drawing inspiration from nature and utilizing diverse materials, light, and movement. As a personal challenge, I aim to implement everything in real-time, enabling immediate integration into performances or utilization as installations. Thank you for checking out my portfolio."
    },
    "projects": [
        {
            "name": "kinetic fashion",
            "description": ""
        },
        {
            "name": "kinetic fashion",
            "description": ""
        }
    ],
    "randomProjects":{
        "headline": "random <span>experiments</span>",
        "hint": "click on the tile to toggle sound of the video on/off. And hover for small info."
    },
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
        "headline": "Take<span>what you</span>need"
    }
}

document.querySelector('#app').innerHTML = `
<!-- TODO: REMOVE  
<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
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
                <li class="nav__list-item"><a href="#motivation" class="nav__link">Motivation</a></li>
                <li class="nav__list-item"><a href="#selected-projects" class="nav__link">Selected Projects</a></li>
                <li class="nav__list-item"><a href="#random-experiments" class="nav__link">Random Experiments</a></li>
                <li class="nav__list-item"><a href="#about-me" class="nav__link">CV</a></li>
                <li class="nav__list-item"><a href="#contact" class="nav__link">Contact</a></li>
            </ul>
          </nav>
      </div>
  </header>

  <!-- MAIN -->
  <main class="main">
  <div class="main__bg-image" style="background-image: url(${bgGridSquare});"></div>
    <div id="container"></div>
        <canvas class="playground"></canvas>
        <div class="hero__video-wrapper">
            <video class="hero__video hero__video--top" muted playsinline >
                <source
                    src="${mouthHEVC}"
                    type="video/mp4; codec=hvc1"
                >
                <source
                    src="${mouthWEBM}"
                    type="video/webm"
                >
            </video> 
        </div>
        <section class="section hero">
            <div class="hero__overlay"></div>
            <h1 class="hero__headline" id="heroHeadline">${texts.heroHeadline}</h1>
            <video class="hero__video" muted playsinline >
                <source
                    src="${mouthHEVC}"
                    type="video/mp4; codec=hvc1"
                >
                <source
                    src="${mouthWEBM}"
                    type="video/webm"
                >
            </video> 
            <h2 class="hero__headline-hello hide">${texts.heroHeadlineHello}</h1>
        </section>
        <section class="section motivation" id="motivation">
            <div class="motivation__bg-image bg-image" style="background-image: url(${bgGrid});"></div>
            <div class="motivation__intro"> 
                <p class="motivation__text">${texts.intro.short}</p>
                <div class="popup fullscreen"> 
                    <button class="motivation__button popup__button">${texts.intro.btn}</button>
                    <div class="popup__content motivation__popup-content"> 
                        <div class="popup__content-inner">
                            <button class="popup__close motivation__popup-close">${texts.aboutMe.popupClose}</button>
                            <p class="motivation__popup-text">${texts.intro.fullMotivation}</p>
                        </div>
                    </div>
                </div>
                
                <p class="motivation__focus-hint">${texts.intro.hint}</p>
            </div>
            <img id="abstractFocus" src="${introDiagram}" alt="things i focus on shown in a diagram" loading="lazy"/>
        </section>

      <section id="selected-projects" class="section project project--grid-1 project--pupppet-dance" id="puppet-dance">
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
            <div class="project__bg-image bg-image" style="background-image: url(${bgGrid});"></div>
            <div class="project__tiles">                
                <div class="project__tile project__tile-1 popup fullscreen">
                    <h2 class="project__headline">Artificial <span>fashion</span></h2>
                    <button class="project__button popup__button" type="button" title="show details on click">        
                        <video width="250"  height="250" class="video" muted>
                            <source src="${videoPorgy}" type="video/mp4" />
                        </video>
                    </button>
                    <div class="popup__content project__popup-content"> 
                        <div class="popup__content-inner">
                            <button class="popup__close project__popup-close">${texts.aboutMe.popupClose}</button>
                            <div class="project__popup-text popup__content-text">
                                <h3 class="popup__content-headline"><span>“artificial” Fashion</span> – What if, what we wear reacts to our counterparts?</h3>
                                <p>Based on the <a href="#abstractFocus" class="link">diagram</a> in the beginning I tried to combine different layers in a wearable sculpture, that can be performed with projections.
                                With the goal to create a space that inspires, motivates and captures.
                                </p>
                                <p>
                                What consequences could such a thing have? <br>
                                Could it reduce screen time on smartphones and bring the importance of human interaction back to the forefront?<br>
                                For me 'Artificial' fashion is an experiment that is exciting to explore to see what questions arise as a result.
                                </p>
                                <p></p>
                                <img class="project__popup-image popup__content-image" src="${kineticVestDiagram}" alt="technical sketch of kinetic vest" loading="lazy"/>
                                <video width="250"  height="250" class="project__popup-video popup__content-video video-autoplay" playsinline muted loop>
                                    <source src="${kineticVestSketch}" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="project__tile project__tile-2 popup fullscreen">
                    <h2 class="project__headline"><span>Puppet</span> dance</h2>
                    <button class="project__button popup__button" type="button" title="show details on click">        
                        <video width="250"  height="250" class="video" muted>
                            <source src="${videoPorgy}" type="video/mp4" />
                        </video>
                    </button>
                    <div class="popup__content project__popup-content"> 
                        <div class="popup__content-inner">
                            <button class="popup__close project__popup-close">${texts.aboutMe.popupClose}</button>
                            <div class="project__popup-text popup__content-text">
                            <h3 class="popup__content-headline"><span>“artificial” Fashion</span> – What if, what we wear reacts to our counterparts?</h3>
                            <p>Based on the <a href="#abstractFocus" class="link">diagram</a> in the beginning I tried to combine different layers in a wearable sculpture, that can be performed with projections.
                            With the goal to create a space that inspires, motivates and captures.
                            </p>
                            <p>
                            What consequences could such a thing have? <br>
                            Could it reduce screen time on smartphones and bring the importance of human interaction back to the forefront?<br>
                            For me 'Artificial' fashion is an experiment that is exciting to explore to see what questions arise as a result.
                            </p>
                            <p></p>
                            <img class="project__popup-image popup__content-image" src="${puppetDiagram}" alt="technical sketch of kinetic vest" loading="lazy"/>
                            <video width="250"  height="250" class="project__popup-video popup__content-video video-autoplay" playsinline muted loop>
                                <source src="${kineticVestSketch}" type="video/mp4" />
                            </video>
                        </div>                        </div>
                    </div>
                </div>
                <div class="project__tile project__tile-3 popup fullscreen">
                    <h2 class="project__headline">Digital <span>Data inside</span> physical <span>space</span></h2>
                    <button class="project__button popup__button" type="button" title="show details on click">        
                        <video width="250"  height="250" class="video" muted>
                            <source src="${videoPorgy}" type="video/mp4" />
                        </video>
                    </button>
                    <div class="popup__content project__popup-content"> 
                        <div class="popup__content-inner">
                            <button class="popup__close project__popup-close">${texts.aboutMe.popupClose}</button>
                            <p class="project__popup-text">${texts.intro.fullMotivation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="random-projects" id="random-experiments">
            <div class="random-projects__bg-image bg-image" style="background-image: url(${bgGrid});"></div>

            <div class="random-projects__content">
                <h2 class="random-projects__headline">${texts.randomProjects.headline}</h2>
            </div>
            <p class="random-projects__text">The following projects show some small or bigger experiments that try to desrobe me and helped me to learn Software and to start.</p>
            <div class="random-projects__items">
                <p class="random-projects__hint">${texts.randomProjects.hint}</p>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel1}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel2}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel3}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel4}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel5}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel6}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel7}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel8}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel9}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel10}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel11}" type="video/mp4" />
                </video>
                <video width="150"  height="150" class="random-projects__video video" muted >
                    <source src="${showReel12}" type="video/mp4" />
                </video>
            </div>
        </section>
        <section class="section about-me" id="about-me">
            <div class="about-me__bg-image bg-image" style="background-image: url(${bgGrid});"></div>
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
            <div class="footer__face-wrapper">
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

    const hero = new Hero();
    hero.init();

    const threeScene = new ThreeScene();
    threeScene.init();

    const eyes = new Eyes();
    eyes.init();   
    
    const motivation = new Motivation();
    motivation.init();
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});
