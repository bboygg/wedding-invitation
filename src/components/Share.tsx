import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  width: "100%",
  paddingBottom: 42,
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
  background: "#00898a",
  borderColor: "#00898a",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#00898a !important",
    borderColor: "#00898a !important",
    opacity: 0.7,
    color: "#ffffff !important",
  },
  "&:focus": {
    background: "#00898a !important",
    borderColor: "#00898a !important",
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
            title: `${data?.groom?.last_name}❤${data?.bride?.last_name} 결혼식에 초대합니다`,
            description:
              "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요. 🤵👰 Please click the 'Open Wedding Invitation' button below to read it.🤵👰",
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
          message.success("카카오톡으로 청첩장을 공유합니다!");
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
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <h2>Share the Love</h2>
      </Divider>
      <p>Share the wedding invitation using the links below. 💌</p>
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={() => setShareCount((prev) => prev + 1)}
      >
        카카오톡으로 공유하기 / Share on KakaoTalk
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
          링크로 공유하기 / Share Link
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
