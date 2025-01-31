import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#fbfbfc",
  // backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
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
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <h2>Wedding Details</h2>
      </Divider>
      <Content>
        {data?.greeting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <GroomBride>
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name}의 차남 고성조 (Sungjo Go)
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}의 장녀 {data?.bride?.name}
      </GroomBride>
    </Wrapper>
  );
}
