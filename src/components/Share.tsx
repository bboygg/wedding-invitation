import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { styled } from "@stitches/react";  // Ensure this is imported

declare global {
  interface Window {
    Kakao: any;
  }
}

// ✅ Ensures entire section is centered but does NOT override <h2>
const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (shareCount !== 0) {
        if (
          window.Kakao &&
          window.Kakao.Link &&
          typeof window.Kakao.Link.createDefaultButton === "function"
        ) {
          window.Kakao.Link.createDefaultButton({
            objectType: "feed",
            container: "#sendKakao",
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

          setTimeout(() => {
            document.getElementById("sendKakao")?.click();
            message.success("카카오톡으로 청첩장을 공유합니다! Share wedding invitation through KakaoTalk!");
          }, 100);
        } else {
          console.error("Kakao Link API is not available.");
        }
      } else {
        try {
          const apiToken =
            process.env.NEXT_PUBLIC_KAKAO_API_TOKEN || data?.kakaotalk?.api_token;
          if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(apiToken);
          }
        } catch (error) {
          console.error("Kakao init error", error);
        }
      }
    }
  }, [shareCount, data]);

  return (
    <Wrapper>
      {/* ✅ Remove any inline styles on <h2> to ensure global CSS applies */}
      <h2 className="global-h2">Share the Love</h2> 

      <p>Share the wedding invitation using the buttons below. 💌</p>

        <button
          className="styled-button"
          id="sendKakao"
          onClick={() => setShareCount((prev) => prev + 1)}
        >
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
