import { Inter } from "next/font/google";
import { Header } from "../Components/Header";
import { GeneralIntro } from "../Components/GeneralIntro";
import { About } from "../Components/About";

export default function index() {
  return (
    <div
      class="absolute left-1/2 right-1/2 -translate-x-1/2   w-[1440px] px-[80px] py-[16px] "
      id="background"
    >
      <Header />
      <GeneralIntro />
      <About />
    </div>
  );
}
