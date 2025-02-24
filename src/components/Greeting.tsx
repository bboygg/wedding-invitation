import { useState, useEffect } from 'react';
import { styled } from "@stitches/react";


const CountdownContainer = styled("div", {
  display: "inline-block",             // Shrink-wrap the content
  border: "3px double #D94625",         // Double border with desired color
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

const GroomBride = styled("p", {
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type GreetingProps = {
  data?: Data;
};

export default function Greeting({ data }: GreetingProps) {
  return (
    <Wrapper>
      <h2>Wedding Details</h2>
      <GroomBride className="container">
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name}의 차남 고성조 ({data?.groom?.last_name} {data?.groom?.first_name})
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}의 장녀 {data?.bride?.last_name}{data?.bride?.first_name}
      </GroomBride>
      <Content>
        {data?.date} - {data?.time}
        <br />
        <CountdownTimer />
      </Content>
    </Wrapper>
  );
}