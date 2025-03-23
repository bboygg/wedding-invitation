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

const Address = styled("p", {
  padding: "10px 0px",
});

type LocationProps = {
  data?: Data;
};

// 📌 Countdown Timer (Now Uses `global.css`)
export function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-07-05T07:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / (1000 / 60)) % 60),
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
      <h2>Khmer Wedding</h2>

      <Content>
        {data?.khmer_date} - {data?.khmer_time}
        <br />
        <CountdownTimer />
      </Content>

      <Address className="container">
        {data?.khmer_venue}
        <br />
        {data?.khmer_location}
      </Address>
    </Wrapper>
  );
}
