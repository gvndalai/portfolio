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
          </div>
          <hr></hr>
          <div className="nav-bar-right-seperated-right">
            <img src="icon.png"></img>
            <button id="download-cv-button">Download CV</button>
          </div>
        </div>
      </div>
      <h1>Hi, I'm Gundalai</h1>
      <p>I'm a developer course's student at Pinecone academy</p>
    </main>
  );
}
