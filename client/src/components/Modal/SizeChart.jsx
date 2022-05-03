import React, { useEffect, useCallback } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import { mobile } from "../../responsive";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 95%;
  position: relative;
  border-radius: 20px;
  background-color: white;
  margin: auto;
  max-width: 500px;
  overflow-x: hidden;
  padding: 100px 20px;
  ${mobile({ width: "100%" })};
`;
const Top = styled.div`
  margin-left: 5px;
  font-size: 1.1rem;
  position: absolute;
  top: 5%;
  width: 100%;
`;
const Header = styled.h1`
  font-size: 1.5rem;
`;
const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5%;
  right: 5%;
  color: black;
`;
const ImageContainer = styled.div`
  width: 90%;
  margin: auto;
  align-items: center;
`;
const Image = styled.img`
  width: 500px;
  margin-right: 40px;
`;
const Subheader = styled.h3`
  font-size: 1rem;
  margin: 30px 0px;
`;
const Step = styled.span`
  border: 1px solid black;
  border-radius: 50%;
  font-size: 0.9rem;
  padding: 4px 9px;
`;
const Description = styled.p`
  font-size: 0.9rem;
  margin: 15px 0px;
`;
const Button = styled.button`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 25px;
  background-color: black;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  margin: 20px auto;
  transition: all 0.3s ease-out;
  ${mobile({ width: "100%" })}
`;


const SizeChart = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        document.body.style.overflow = "auto";
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <Container>
      <Wrapper>
        <Top>
          <Header>دليل الموقع</Header>
        </Top>
        <CloseButton>
          <CloseIcon onClick={closeModal} />
        </CloseButton>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
  
        </Paper>
        <Subheader>كيف تتم العملية ؟</Subheader>
        <Step>1</Step>
        <Description>
          اضغط إضافة إلى السلة، اضغط ادفع الان ثم راح يطلبك كتابة الاميل اللي تبي يكون فيه الاشتراك
        </Description>
        <Step>2</Step>
        <Description>
          راح توصل لك رسالة دعوة بالأميل اللي حطيته بشكل شبه فوري اضغط على الرابط وراح يتفعل
        </Description>
        <Step>3</Step>
        <Description>
          تقدر تتابع حالة الطلب من خلال اعدادات الحساب => طلباتي
        </Description>
        <ImageContainer>
          <Image src="https://i.imgur.com/7VzFIv5.png"/>
        </ImageContainer>
        <Button onClick={closeModal}>اغلاق</Button>
      </Wrapper>
    </Container>
  );
};

export default SizeChart;
