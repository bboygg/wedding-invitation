import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  width: "100%",
  paddingBottom: 80,
  textAlign: "center",
});

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  fontFamily: "Arial",
  background: "#798274",
  borderColor: "#798274",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#798274 !important",
    borderColor: "#798274 !important",
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

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  useEffect(() => {
    if (shareCount !== 0) {
      // Ensure Kakao and its Link API are available before calling createDefaultButton
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
            description:
              "Click the button below to open the wedding invitation it.🤵👰",
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
        // Check that Kakao is loaded before initializing
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(apiToken);
        }
      } catch (error) {
        console.error("Kakao init error", error);
      }
    }
  }, [shareCount, data]);

  return (
    <Wrapper>
      <h2>Share the Love</h2>
      <p>Share the wedding invitation using the links below. 💌</p>
      <KakaoTalkShareButton
        className = "oswald"
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={() => setShareCount((prev) => prev + 1)}
      >
        Share on KakaoTalk
      </KakaoTalkShareButton>
      <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() =>
            message.success(
              "청첩장 링크가 복사되었습니다. The wedding invitation link has been copied."
            )
          }
        >
          Share Link
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
