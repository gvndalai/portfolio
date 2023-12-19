import { Header } from "../components/Header";
import { GeneralIntro } from "../components/GeneralIntro";
import { About } from "../components/About";
import { Experience } from "@/components/Experience";
import { Page1 } from "@/components/page1/Page1";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { Timer } from "@/components/Timer";
const IndexPage = () => {
  return (
    <div
      className="mx-auto sm:w-[1440px] w-full flex flex-col items-center"
      id="background"
    >
      <Timer />
      <Header />
      <GeneralIntro />
      <About />
      <Page1 />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
};

export default IndexPage;
