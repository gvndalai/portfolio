import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="nav-bar">
        <img id="nav-bar-left" src="_.png"></img>
        <div className="nav-bar-right">
          <div className="nav-bar-right-seperated-left">
            <div>About</div>
            <div>Work</div>
            <div>Testimonials</div>
            <div>Contact</div>
            <span></span>
          </div>
          <div className="nav-bar-right-seperated-right">
            <img src="icon.png"></img>
            <button id="download-cv-button">Download CV</button>
          </div>
        </div>
      </div>
      <div className="general-intro">
        <div className="intro">
          <h1>Erwin Smith ⚔️</h1>
          <p>
            Erwin Smith (エルヴィン・スミス Eruvin Sumisu?) was the 13th
            commander (団長 Danchō?) of the Scout Regiment. Discerning,
            intelligent, and widely respected, Erwin was an able commander.
            While he cared deeply for his men, he did not hesitate to sacrifice
            them for the good and prosperity of mankind, and his men have proven
            more than willing to stake their lives at his order. Erwin developed
            the Long-Distance Enemy Scouting Formation. Due to uncertainty about
            his future, he later named Hange Zoë as his successor.`
          </p>
          <div className="conditon">
            <div className="location">
              <img src="location.png"></img>
              Paradis island
            </div>
            <div className="job-status">
              <img src="greendot.png"></img>
              Too busy dying for humanity.
            </div>
          </div>
          <img src="Links.png" id="links"></img>
        </div>
        <img src="erwin.png"></img>
      </div>
    </main>
  );
}
