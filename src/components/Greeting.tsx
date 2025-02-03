import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  width: "100%",
});

const Content = styled("div", {
  marginBottom: 10,
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
      <Divider style={{ marginTop: 50, marginBottom: 32 }} plain>
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
      <GroomBride className="container">
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name}의 차남 고성조 ({data?.groom?.last_name} {data?.groom?.first_name})
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}의 장녀 {data?.bride?.last_name} {data?.bride?.first_name}
      </GroomBride>
    </Wrapper>
  );
}