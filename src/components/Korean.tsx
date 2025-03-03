import { styled } from "@stitches/react";
import { Button } from "antd";
import { useState, useEffect } from 'react';


const Wrapper = styled("div", {
  width: "100%",
  paddingBottom: 42,
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
})

type LocationProps = {
  data?: Data;
};

const StyledButton = styled(Button, {
  fontFamily: "Arial",
  background: "#6B7334",
  borderColor: "#6B7334",
  color: "#ffffff",
  margin: "30px", 
  width: "180px",
  height: "35px",
  "&:hover": {
    backgroundColor: "#6B7334 !important",
    borderColor: "#6B7334 !important",
    opacity: 0.7,
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#798274 !important",
    borderColor: "#798274 !important",
    opacity: 0.7,
    color: "#ffffff !important",
  },
});


// Named export for NaverMapButton
export function NaverMapButton() {
  const handleClick = () => {
    window.open(
      "https://map.naver.com/p/entry/place/1750816468?c=15.00,0,0,0,dh",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <StyledButton onClick={handleClick}>
      Naver Map
    </StyledButton>
  );
}

export function KakaoMapButton() {
  const handleClick = () => {
    window.open(
      "https://place.map.kakao.com/1298988185",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <StyledButton onClick={handleClick}>
      Kakao Map
    </StyledButton>
  );
}


const CountdownContainer = styled("div", {
  display: "inline-block",             // Shrink-wrap the content
  border: "3px double #d94625",         // Double border with desired color
  borderRadius: "10px",                 // Rounded corners
  padding: "10px 15px",                // Spacing inside the border
  color: "#402D22",
  textAlign: "center",
  marginTop: 30,
});

// CountdownTimer as a named export
export function CountdownTimer() {
  // ... (same CountdownTimer code)
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-28T15:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hours?: number;
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

  const timerComponents = (Object.keys(timeLeft) as (keyof TimeLeft)[]).map((interval) => (
    <span key={interval}>
      {timeLeft[interval]} {interval}{' '}
    </span>
  ));

  return (
    <CountdownContainer>
      {timerComponents.length > 0 ? timerComponents : <span>Wedding Time</span>}
    </CountdownContainer>
  );
}


// Default export for Location component
export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
        <h2>Korean Wedding</h2>

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

      {/* Use the MapButton here */}
      <NaverMapButton />
      <KakaoMapButton />
      <br/> 
      <Image src="/assets/location-tovhesed.png" alt="Wedding Location" />
    </Wrapper>
  );
}