import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


const Wrapper = styled("div", {
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Content = styled("p", {
  marginBottom: 24,
  padding: "0px 10px",
});

const SubContent = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  marginBottom: 24,
});

const Description = styled("p", {
  marginTop: 8,
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
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <h2>Congratulations</h2>
      </Divider>
      <Content className="container">>축하의 마음을 담아 축의금을 전달해 보세요.<br/>
      You can express your congratulations by sending a celebratory gift. 🎉💌
</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 60, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>신랑측 계좌번호 확인 - Groom </SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 60, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>신부측 계좌번호 확인 - Bride</SubContent>
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
        {/* {data?.groom?.parents?.father && (
          <div>
            <b>부) {data?.groom?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.groom?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다. Account number has been copied.")}
              >
                {data?.groom?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )} */}
        {data?.groom?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>모) {data?.groom?.parents?.mother.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.parents?.mother.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다. \n Account number has been copied.")}
              >
                {data?.groom?.parents?.mother.account_number}&nbsp;<FontAwesomeIcon icon={faCopy} />
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>신랑) 고성조</b>
            <Divider type="vertical" />
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
            When you click on the account number, it is copied as text that can be pasted.
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
        {/* {data?.bride?.parents?.father && (
          <div>
            <b>부) {data?.bride?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )} */}
        {/* {data?.bride?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>모) {data?.bride?.parents?.mother?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.mother?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.mother?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )} */}
        {data?.bride && (
          <div>
            <b>신부) {data?.bride?.last_name}{data?.bride?.first_name}</b>
            <Divider type="vertical" />
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
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다. When you click on the account number, it is copied as text that can be pasted.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
