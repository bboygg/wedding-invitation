import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Greeting = dynamic(() => import("@/components/Greeting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Korean = dynamic(() => import("@/components/Korean"), { ssr: false });
const Khmer = dynamic(() => import("@/components/Khmer"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const Footer = styled("footer", {
  backgroundColor: "#402D22",
  color: "#F2E5D5",
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Welcome to the wedding of Sungjo ❤ Vorleak " name="Title" />
        <meta
          content="2025.06.28 Sat 3PM"
          name="Description"
        />
        <meta content="2025.06.28 Sat 3 PM" name="Keyword" />
        <meta property="og:title" content="Sungjo ❤ Vorleak Wedding Invitation" />
        <meta
          property="og:description"
          content="2025.06.28 Sat 3PM"
        />
        <meta
          property="og:url"
          content=""
        />
        <meta name="theme-color" content="#fbfbfc" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='90' font-size='90'%3E💍%3C/text%3E%3C/svg%3E" />
        <title>Sungjo ❤ Vorleak Wedding</title>

      </Head>
      <main>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        <Greeting data={JsonData} />
        <Gallery />
        <Korean data={JsonData}/>
        <Khmer data={JsonData}/>
        <CongratulatoryMoney data={JsonData} />
        <Share data={JsonData} />
        <Footer>Copyright © 2025 Sungjo & Vorleak</Footer>
      </main>
    </>
  );
}
