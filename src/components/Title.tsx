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
  fontSize: "2.2vh",
  color: "white", 
  textShadow: "1px 0 15px #004c4e", // Ensure text is readable
});

const GroomBride = styled("p", {
  fontSize: "8vh",
  margin: 0,
  textShadow: "1px 0 15px #004c4e",

  // Responsive font size for mobile
  "@media (max-width: 768px)": {
    fontSize: "6vh",
  },
});

const Schedule = styled("p", {
  fontSize: "2.2vh",
  textShadow: "1px 0 15px #004c4e", // text-shadow 
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
        <GroomBride className="alex-brush">
        {data?.groom?.first_name} & {data?.bride?.first_name}
        </GroomBride>
        <Schedule>
          {data?.date}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
