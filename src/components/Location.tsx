import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#fbfbfc",
  // backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

const Address = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

type LocationProps = {
  data?: Data;
};

export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <h2>Event Information</h2>
      </Divider>
      <Address>
          {data?.location}
        </Address>
      <Image src="/assets/location-tovhesed.png" alt="Wedding Location" />
    </Wrapper>
    
  );
}