import React, { useRef } from "react";
import { Header } from "../components/Header";
import { GeneralIntro } from "../components/GeneralIntro";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Page1 } from "../components/page1/Page1";
import { Work } from "../components/Work";
import { Footer } from "../components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Head from "next/head";
// import { HamburgerMenu } from "@/components/HamburgerMenu";

const IndexPage = () => {
  const pageRef = useRef();

  const downloadPdf = () => {
    const input = pageRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save("Erwin.pdf");
    });
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link
          data-rh="true"
          rel="icon"
          href="https://pinecone-assignments.vercel.app/img/favicon.ico"
        ></link>
      </Head>
      <div
        className="mx-auto sm:w-[1440px] w-full flex flex-col items-center"
        id="background"
        ref={pageRef}
      >
        {/* <HamburgerMenu /> */}
        <Header onDownloadPdf={downloadPdf} />
        <GeneralIntro />
        <About />
        <Page1 />
        <Experience />
        <Work />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
