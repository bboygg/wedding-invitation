import { styled } from "@stitches/react";
import { Divider } from "antd";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  margin: 0,
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,

  // Desktop by default
  display: "block",

  "@media (max-width: 768px)": {
    display: "none", // Hide on mobile
  },
});

const MobileVideoBackground = styled(VideoBackground, {
  display: "none", // Hidden by default

  "@media (max-width: 768px)": {
    display: "block", // Show on mobile
  },
});

const WeddingInvitation = styled("p", {
  fontSize: "2vh",
  backgroundColor: "#004c4e", // Text background color
  padding: "6px 10px", // Adds space inside the box
  borderRadius: "8px", // Rounded corners
  display: "inline-block", // Ensures background wraps around the text
  color: "white", // Ensure text is readable
});

const GroomBride = styled("p", {
  fontSize: "8vh",
  marginBottom: 0,
  marginTop: 0, // Reset any top margin
  marginLeft: 0, // Reset any left margin
  marginRight: 0, // Reset any right margin
  textShadow: "1px 0 10px #004c4e", // text-shadow 
});

const Schedule = styled("p", {
  fontSize: "2vh",
  marginBottom: 10,
  textShadow: "1px 0 10px #004c4e", // text-shadow 
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>

      {/* Desktop Video */}
      <VideoBackground autoPlay loop muted playsInline>
        <source src="./assets/Breaking.mp4" type="video/mp4" />
      </VideoBackground>

      {/* Mobile Video */}
      <MobileVideoBackground autoPlay loop muted playsInline>
        <source src="./assets/MobileVideo.mp4" type="video/mp4" />
      </MobileVideoBackground>

      <TitleWrapper style={{ color: "white" }}>
        <WeddingInvitation className="oswald">
        YOU ARE INVITED TO OUR WEDDING 🥰
        </WeddingInvitation>
        <GroomBride className="alex-brush" style={{ padding: "0 16px" }}>
        {data?.groom?.first_name} & {data?.bride?.first_name}
        </GroomBride>
        <Schedule>
          {data?.date}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
