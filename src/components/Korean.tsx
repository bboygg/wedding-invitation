import { styled } from "@stitches/react";
import { useState, useEffect } from 'react';

// =======================
// Styled Components
// =======================
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

const ReceptionInfo = styled("p", {
  fontSize: "2vh",
  marginTop: 20,
  marginBottom: 20,
  textAlign: "center",
});

// =======================
// Types
// =======================

type Data = {
  korean_date?: string;
  korean_time?: string;
  korean_venue?: string;
  korean_location?: string;
};

type LocationProps = {
  data?: Data;
};

// =======================
// External Link Buttons (simple)
// =======================
function StyledButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function NaverMapButton() {
  const handleClick = () => {
    window.open(
      "https://map.naver.com/p/entry/place/1750816468?c=15.00,0,0,0,dh",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return <StyledButton onClick={handleClick}>Naver Map</StyledButton>;
}

export function KakaoMapButton() {
  const handleClick = () => {
    window.open(
      "https://place.map.kakao.com/1298988185",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return <StyledButton onClick={handleClick}>Kakao Map</StyledButton>;
}

export function LiveStreamingButton() {
  const handleClick = () => {
    window.open(
      "https://tovhesed.com/app/service/youtube.php",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return <StyledButton onClick={handleClick}>Live Streaming</StyledButton>;
}

// =======================
// Countdown Timer
// =======================
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

// =======================
// Main Component
// =======================
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

      {/* Directions */}
      <h4 style={{ marginTop: 40}}>
        By Subway | 지하철로 오시는 방법  <br/>
      </h4>
      <h5>
        지하철 7호선)  학동역 10번 출구 (서울세관방면) 셔틀버스이용 또는 도보 5분 <br/>
        Subway Line 7) Hakdong Station, Exit 10 : free shuttle bus or 5‑minute walk
      </h5>
    
      <h4 style={{ marginTop: 40}}>
        By Car | 차량으로 오시는 방법 <br/>
      </h4>
      <h5>네비게이션: &quot;토브헤세드&quot; 또는 &quot;언북중학교&quot; 검색 <br/>
          도로명주소: 서울특별시 강남구 논현2동 도산대로 38길 32 <br/>
          주차장 안내: 주차요원의 안내를 받으세요.</h5>

      {/* Map Buttons */}
      <NaverMapButton />
      <KakaoMapButton />

      {/* Live Streaming Notice & Button */}
      <h4 style={{ marginTop: 40}}>
        참석이 어려우신 분들을 위해&nbsp;<strong>라이브 스트리밍</strong>을 준비했습니다.<br/>
        We will also be <strong>live‑streaming</strong> the ceremony&nbsp;for guests who can’t join in person.
      </h4>
      <br/>
      <LiveStreamingButton />

      {/* Wedding Reception Info (uncomment if needed)
      <ReceptionInfo>
        <h4>피로연 안내</h4>
        <br />
        2025년 6월 14일 토요일 오후 5시 - 8시
        <br />
        경북 영주시 광복로 32번길 16 남서울웨딩 2층 연회장
      </ReceptionInfo> */}
    </Wrapper>
  );
}
