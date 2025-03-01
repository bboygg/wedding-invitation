import { styled } from "@stitches/react";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
});

const Content = styled("p", {
  marginBottom: 24,
  padding: "0px 10px",
});

const RedEnvelopeIcon = styled("span", {
  fontSize: "60px",
  marginBottom: "10px",
  display: "inline-block",
  cursor: "pointer", // indicates that it's clickable
  transition: "transform 0.2s ease, opacity 0.2s ease", // smooth hover effects
  "&:hover": {
    transform: "scale(1.1)",  // slightly scale up on hover
    opacity: 0.8,             // optionally reduce opacity on hover
  },
});

const SubContent = styled("p", {
  fontFamily: "Arial",
  fontSize: "1.5vh",
  lineHeight: 1.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontFamily: "Arial",
  marginTop: 8,
  fontSize: "1.5vh",
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <h2>Congratulations</h2>
      <Content>축하의 마음을 담아 축의금을 전달해 보세요.<br/>
      You can express your congratulations by sending a celebratory gift. 🎉💌
      </Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <RedEnvelopeIcon>🧧</RedEnvelopeIcon>
        <br/>
        <SubContent>
          신랑측 계좌번호 확인
          <br />
          Groom&apos;s Account Info
          </SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <RedEnvelopeIcon>🧧</RedEnvelopeIcon>
        <br />
        <SubContent>
          신부측 계좌번호 확인 
          <br /> 
          Bride&apos;s Account Info
        </SubContent>
      </ContactButton>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>모)</b> {data?.groom?.parents?.mother.name}
            <br />
            <CopyToClipboard text={data?.groom?.parents?.mother.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다. Account number has been copied.")}
              >
                {data?.groom?.parents?.mother.account_number}&nbsp;<FontAwesomeIcon icon={faCopy} />
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>신랑)</b> 고성조 
            <br />
            <CopyToClipboard text={data?.groom?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다. Account number has been copied.")}
              >
                {data?.groom?.account_number}&nbsp;<FontAwesomeIcon icon={faCopy} />
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
            <br />
            Click to copy the account number for easy pasting.
          </Description>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.bride && (
          <div>
            <b>신부)</b> {data?.bride?.last_name}{data?.bride?.first_name}
            <br />
            <CopyToClipboard text={data?.bride?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다. Account number has been copied.")}
              >
                {data?.bride?.account_number}&nbsp;<FontAwesomeIcon icon={faCopy} />
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다. 
            <br/>
            Click to copy the account number for easy pasting.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
