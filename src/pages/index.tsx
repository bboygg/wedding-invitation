import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Greeting = dynamic(() => import("@/components/Greeting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
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
        <meta content="Welcome to the wedding of Sungjo ❤ Vorleak Wedding " name="Title" />
        <meta
          content="2025.06.28 Sat 3PM"
          name="Description"
        />
        <meta content="2025.06.28 Sat 3 PM" name="Keyword" />
        <meta property="og:title" content="Sungjo ❤ Vorleak Wedding" />
        <meta
          property="og:description"
          content="2025.06.28 Sat 3PM"
        />
        <meta
          property="og:url"
          content="https://kyuhyuk.kr/wedding-invitation"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Sungjo ❤ Vorleak Wedding</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        <Greeting data={JsonData} />
        <Gallery />
        <Location />
        <CongratulatoryMoney data={JsonData} />
        <Share data={JsonData} />
        <Footer>Copyright © 2025 Sungjo & Vorleak</Footer>
      </main>
    </>
  );
}
