import { Header } from "../Components/Header";
import { GeneralIntro } from "../Components/GeneralIntro";
import { About } from "../Components/About";
import { Experience } from "@/Components/Experience";
import { Page1 } from "@/Components/Page1/Page1";
import { Work } from "@/Components/Work";

const IndexPage = () => {
  return (
    <div
      className="mx-auto w-[1440px] flex flex-col items-center"
      id="background"
    >
      <Header />
      <GeneralIntro />
      <About />
      <Page1 />
      <Experience />
      <Work />
    </div>
  );
};

export default IndexPage;
