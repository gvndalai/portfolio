import { Header } from "../Components/Header";
import { GeneralIntro } from "../Components/GeneralIntro";
import { About } from "../Components/About";
import { Experience } from "@/Components/Experience";
import { Page1 } from "@/Components/Page1/Page1";
import { Work } from "@/Components/Work";
import { Footer } from "@/Components/Footer";
const IndexPage = () => {
  return (
    <div
      className="mx-auto sm:w-[1440px] w-full flex flex-col items-center"
      id="background"
    >
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
