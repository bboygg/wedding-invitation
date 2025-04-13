import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { message } from "antd";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { styled } from "@stitches/react";

declare global {
  interface Window {
    Kakao: any;
  }
}

// ✅ Ensures the entire section is centered but does NOT override <h2>
const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  // Initialize Kakao SDK once when component mounts or when data changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const apiToken = process.env.NEXT_PUBLIC_KAKAO_API_TOKEN || data?.kakaotalk?.api_token;
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(apiToken);
        }
      } catch (error) {
        console.error("Kakao init error", error);
      }
    }
  }, [data]);

  // Handler to trigger sharing using Kakao.Link.sendDefault.
  const handleShare = () => {
    if (
      window.Kakao &&
      window.Kakao.Link &&
      typeof window.Kakao.Link.sendDefault === "function"
    ) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${data?.groom?.first_name}❤${data?.bride?.first_name} 결혼식에 초대합니다`,
          description: "Click the button below to open the wedding invitation. 🤵👰",
          imageUrl: data?.kakaotalk?.share_image,
          link: {
            mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
            webUrl: data?.kakaotalk?.wedding_invitation_url,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
              webUrl: data?.kakaotalk?.wedding_invitation_url,
            },
          },
        ],
        installTalk: true,
      });
      message.success("카카오톡으로 청첩장을 공유합니다! Share wedding invitation through KakaoTalk!");
    } else {
      console.error("Kakao Link API is not available.");
    }
  };

  return (
    <Wrapper>
      <h2 className="global-h2">Share the Love</h2>
      <p>Share the wedding invitation using the buttons below. 💌</p>
      <button className="styled-button" onClick={handleShare}>
        <MessageFilled /> KakaoTalk
      </button>
      <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
        <button
          className="styled-button"
          onClick={() =>
            message.success(
              "청첩장 링크가 복사되었습니다. The wedding invitation link has been copied."
            )
          }
        >
          <LinkOutlined /> Link Share
        </button>
      </CopyToClipboard>
    </Wrapper>
  );
}
