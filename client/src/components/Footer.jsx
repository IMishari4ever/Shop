import {
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import styled from "styled-components";
import { mobile, tablet, bigtablet } from "../responsive";

const MainContainer = styled.div`
  background-color: #110f12;
  color: white;
  margin: auto;
  width: 100vw;
  ${mobile({ flexDirection: "column" })}
`;
const Container = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 1295px;
  background-color: #110f12;
  color: white;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${bigtablet({ padding: "10px" })}
  ${tablet({ padding: "5px" })}
  ${mobile({ padding: "5px" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({ padding: "5px" })}
  ${mobile({ padding: "5px" })}
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  justify-content: center;
  ${tablet({ padding: "5px" })}
  ${mobile({ padding: "5px" })}
`;

const SocialContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SocialIcon = styled.span`
  width: 40px;
  cursor: pointer;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  ${tablet({ marginRight: "5px" })}
`;
const Icon = styled.span`
  width: 25px;
  cursor: pointer;
  height: 25px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  ${bigtablet({ marginRight: "10px", height: "20px" })}
  ${tablet({ display: "none" })}
`;
const StoreContainer = styled.div`
  display: flex;
`;

const Store = styled.img`
  width: 100px;
  cursor: pointer;
  display: flex;
  margin-right: 15px;
  ${bigtablet({ width: "90px" })}
  ${tablet({ marginRight: "10px", width: "65px" })}
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 30px;
  ${tablet({ marginBottom: "10px", fontSize: "0.85rem" })}
  ${mobile({ marginBottom: "10px", fontSize: "0.85rem" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  font-size: 12px;
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: lightgrey;
  }
  ${tablet({ marginBottom: "5px", flexWrap: "wrap", fontSize: "10px" })}
  ${mobile({ marginBottom: "5px", fontSize: "10px" })}
`;

const ContactItem = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${tablet({ marginBottom: "10px", flexWrap: "wrap", fontSize: "10px" })}
  ${mobile({ marginBottom: "5px", fontSize: "10px" })}
`;
const Hr = styled.hr`
  width: 90vw;
  max-width: 1295px;
  margin: auto;
  border: none;
  height: 0.5px;
  background-color: grey;
`;
const Bottom = styled.div`
  font-size: 10px;
  color: white;
  margin: auto;
  padding: 10px 0 20px 0;
  width: 100vw;
  text-align: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <MainContainer>
      <Container style={{ paddingTop: "3vh" }}>
        <Left>
          <Title>Ultra Premium</Title>
          <List>
            <ListItem>رؤيتنا</ListItem>
            <ListItem>خدماتنا</ListItem>
            <ListItem>سيرتنا</ListItem>
            <ListItem>سياسة الخصوصية</ListItem>
            <ListItem>رابط الإحالة</ListItem>
            <ListItem>المنتجات</ListItem>
          </List>
        </Left>
        <Center>
          <Title>خدمة العملاء</Title>
          <List>
            <ListItem>حالة الطلب</ListItem>
            <ListItem>طرق الدفع</ListItem>
            <ListItem>اتصل بينا</ListItem>
            <ListItem>سياسة الاسترداد</ListItem>
            <ListItem>قسم المساعدة</ListItem>
            <ListItem>الاسئلة الشائعة</ListItem>
          </List>
        </Center>
        <Right>
          <Title>المجتمع</Title>
          <List>
            <ListItem>نظرة عامة</ListItem>
            <ListItem>العروض</ListItem>
            <ListItem>الخدمات الحديثة</ListItem>
            <ListItem>كوبونات الخصم</ListItem>
            <ListItem>الاقتراحات</ListItem>
            <ListItem>الدسكورد</ListItem>
          </List>
        </Right>
      </Container>
      <Container>
        <Left>
          <Title>التواصل</Title>
          <ContactItem>
            <Icon>
              <Room />
            </Icon>
            1041 الشرقية، الظهران
          </ContactItem>
          <ContactItem>
            <Icon>
              <Phone />
            </Icon>{" "}
            (054) 544 8888
          </ContactItem>
          <ContactItem>
            <Icon>
              <MailOutline />
            </Icon>{" "}
            d_@hotmaill.com
          </ContactItem>
        </Left>
        <Center>
          <Title>تابعنا على</Title>
          <SocialContainer>
            <SocialIcon>
              <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
            <SocialIcon>
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Center>
        <Right>
          <Title>احصل على التطبيق في:</Title>
          <StoreContainer>
            <Store src={process.env.PUBLIC_URL + "/appstore.svg"} />
            <Store src={process.env.PUBLIC_URL + "/playstore.svg"} />
          </StoreContainer>
        </Right>
      </Container>
      <Hr />
      <Bottom>كامل الحقوق محفوظة &copy; {year} Ultra Premium</Bottom>
    </MainContainer>
  );
};

export default Footer;
