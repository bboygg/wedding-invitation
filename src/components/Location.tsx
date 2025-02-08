import { styled } from "@stitches/react";
import { Divider, Button } from "antd";

const Wrapper = styled("div", {
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Image = styled("img", {
  width: "600px",
  height: "600px",
});

const Address = styled("p", {
  marginBottom: 24,
  padding: "0px 10px",
})

type LocationProps = {
  data?: Data;
};

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
    <Button onClick={handleClick}>
      Naver Map
    </Button>
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
    <Button onClick={handleClick}>
      Kakao Map
    </Button>
  );
}

// Default export for Location component
export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <h2>Event Information</h2>
      </Divider>
      <Address className="container">
        {data?.location}
      </Address>
      <p>
      지하철 안내
      <br />
      7호선 학동역 10번 출구
      <br />
      예식 1시간 전부터 셔틀버스 운행
      <br />
      (서울세관 방면)
      <br />
      버스 안내
      <br />
      언북중학교 입구 정류장 하차
      <br />
      간선버스 145,440
      <br />
      지선부스 4212
      <br />
      서울세관 정류장 하차
      <br />
      간선버스 141
      <br />
      직행버스 3600
      <br />
      차량 안내
      <br />
      네비게이션 “토브헤세드”또는 “언북중학교”검색
      <br />
      서울시 강남구 논현 2동 도산대로 38길 32
      <br />
      (지번)서울특별시 강남구 논현동 72-8
      </p>
      
     
      <Image src="/assets/location-tovhesed.png" alt="Wedding Location" />
<br/>
      {/* Use the MapButton here */}
      <NaverMapButton />
      <KakaoMapButton />
    </Wrapper>
  );
}