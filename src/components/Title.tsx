import { styled } from "@stitches/react";

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
  color: "white",
  textShadow: "1px 0 10px #D94423", // Ensure text is readable
});

const GroomBride = styled("p", {
  fontSize: "8vh",
  color: "#D94423",
  margin: 0,
  textShadow: "1px 0 5px #F2E5D5",

  // Responsive font size for mobile
  "@media (max-width: 768px)": {
    fontSize: "6vh",
  },
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
        <WeddingInvitation>
        YOU ARE INVITED TO OUR WEDDING 🥰
        </WeddingInvitation>
        <GroomBride className="alex-brush">
        {data?.groom?.first_name} & {data?.bride?.first_name}
        </GroomBride>
      </TitleWrapper>
    </Layout>
  );
}
