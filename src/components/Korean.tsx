import { styled } from "@stitches/react";
import { useState, useEffect } from 'react';

const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
});

const Content = styled("p", {
  marginTop: 50,
  marginBottom: 50,
  width: "100%",
  textAlign: "center",
});

const Image = styled("img", {
  maxWidth: "600px",
  width: "80%",
});

const Address = styled("p", {
  padding: "10px 0px",
});

type LocationProps = {
  data?: Data;
};

// 📌 Naver Map Button (Now Uses `global.css`)
export function NaverMapButton() {
  const handleClick = () => {
    window.open(
      "https://map.naver.com/p/entry/place/1750816468?c=15.00,0,0,0,dh",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button className="styled-button" onClick={handleClick}>
      Naver Map
    </button>
  );
}

// 📌 Kakao Map Button (Now Uses `global.css`)
export function KakaoMapButton() {
  const handleClick = () => {
    window.open(
      "https://place.map.kakao.com/1298988185",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button className="styled-button" onClick={handleClick}>
      Kakao Map
    </button>
  );
}

// 📌 Countdown Timer (Now Uses `global.css`)
export function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-28T15:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hr?: number;
    min?: number;
    sec?: number;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <span key={unit} className="countdown-unit">
          {value} {unit}{" "}
        </span>
      ))}
    </div>
  );
}

// 📌 Default Export for Location Component
export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <h2>The Korean Wedding</h2>

      <Content>
        {data?.korean_date} - {data?.korean_time}
        <br />
        <CountdownTimer />
      </Content>

      <Address className="container">
        {data?.korean_venue}
        <br />
        {data?.korean_location}
      </Address>

      {/* Use the Map Buttons */}
      <NaverMapButton />
      <KakaoMapButton />
      <br />
      <Image src="/assets/location-tovhesed.png" alt="Wedding Location" />
    </Wrapper>
  );
}
