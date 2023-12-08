import { Inter } from "next/font/google";
import { Header } from "../Components/Header";
import { GeneralIntro } from "../Components/GeneralIntro";
import { About } from "../Components/About";
import { Experience } from "@/Components/Experience";
import { Page1 } from "@/Components/Page1/Page1";
import { Background } from "@/Components/Background";

export default function index() {
  const jobDescription = [
    {
      title: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
      ],
    },
    {
      title: "Full Stack Developer",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    },
    {
      title: "Team Lead",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
      ],
    },
  ];
  return (
    <div
      class="absolute left-1/2 right-1/2 -translate-x-1/2   w-[1440px]  flex flex-col items-center "
      id="background"
    >
      <Header />
      <GeneralIntro />
      <About />
      <Page1 />
      <Experience />
      {jobDescription.map((job, index) => {
        return <Background key={index} title={job.title} />;
      })}
      {/* <Background title="hi" /> */}
    </div>
  );
}
