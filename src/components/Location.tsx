import { styled } from "@stitches/react";
import { Button } from "antd";

const Wrapper = styled("div", {
  width: "100%",
  paddingBottom: 42,
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

// Default export for Location component
export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
        <h2>Event Location</h2>
      <Address className="container">
        {data?.venue}
        <br />
        {data?.location}
      </Address>
      {/* Use the MapButton here */}
      <NaverMapButton />
      <KakaoMapButton />
      <br/> 
      <Image src="/assets/location-tovhesed.png" alt="Wedding Location" />
    </Wrapper>
  );
}