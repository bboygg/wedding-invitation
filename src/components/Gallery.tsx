import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "./assets/photo-1.jpg",
    thumbnail: "./assets/photo-1.jpg",
  },
  {
    original: "./assets/photo-2.jpg",
    thumbnail: "./assets/photo-2.jpg",
  },
  {
    original: "./assets/photo-3.jpg",
    thumbnail: "./assets/photo-3.jpg",
  },
  {
    original: "./assets/photo-4.jpg",
    thumbnail: "./assets/photo-4.jpg",
  },
  {
    original: "./assets/photo-5.jpg",
    thumbnail: "./assets/photo-5.jpg",
  },
  {
    original: "./assets/photo-6.jpg",
    thumbnail: "./assets/photo-6.jpg",
  },
  {
    original: "./assets/photo-7.jpg",
    thumbnail: "./assets/photo-7.jpg",
  },
  {
    original: "./assets/photo-8.jpg",
    thumbnail: "./assets/photo-8.jpg",
  },
  {
    original: "./assets/photo-9.jpg",
    thumbnail: "./assets/photo-9.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간 - Our Beautiful Moments</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
