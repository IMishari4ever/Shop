import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import FailedModal from "../components/Modal/FailedModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Promotion from "../components/Promotion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../redux/authRedux";

const Container = styled.div``;
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;
const Wrapper = styled.div`
  width: 400px;
  padding: 0 20px;
  ${mobile({ width: "300px" })};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  text-indent: 10px;
  border-radius: 30px;
  border: 1px solid gray;
`;
const Agreement = styled.label`
  display: block;
  padding-left: 15px;
  text-indent: -15px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
`;
const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  padding: 0;
  margin-right: 10px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  text-align: center;
  color: #d9534f;
  font-size: 14px;
  padding: 5px 0;
`;
const Button = styled.button`
  text-align: center;
  width: 40%;
  border: none;
  padding: 15px 0;
  background-color: #110f12;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: #f8f8f8;
    color: black;
    cursor: not-allowed;
  }
`;
const Options = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [admin, setAdmin] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isFetching, currentUser, error } = useSelector((state) => state.user);

  const checkPassword = () => {
    if (password !== confirmPassword) {
      return false;
    } else if (password.length < 4) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPassword() &&
      signupRequest(dispatch, {
        firstname,
        lastname,
        username,
        password,
        email,
        isAdmin: admin,
      });
  };

  useEffect(() => currentUser && navigate("/"), [currentUser, navigate]);

  return (
    <Container>
      <FailedModal display={error === false ? "none" : "flex"} />
      <Promotion />
      <Navbar />
      <MainContainer>
        <Wrapper>
          <Title>كن جزءًا من الترا بريميوم</Title>
          <Form onSubmit={handleSubmit}>
            <InputField
              type="text"
              placeholder="اسمك الاول"
              onChange={(e) => setFirstName(e.target.value)}
              required
              minLength={2}
            />
            <InputField
              type="text"
              placeholder="اسمك الاخير"
              onChange={(e) => setLastName(e.target.value)}
              required
              minLength={2}
            />
            <InputField
              type="email"
              placeholder="اميلك"
              onChange={(e) => setEmail(e.target.value)}
              required
              minLength={5}
            />
            <InputField
              type="text"
              placeholder="اسم المستخدم"
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={5}
            />
            <InputField
              type="password"
              placeholder="كلمة السر"
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <InputField
              type="password"
              placeholder="تأكيد كلمة السر"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
            {password !== "" &&
            confirmPassword !== "" &&
            password !== confirmPassword ? (
              <Error>كلمة السر لا تتطابق</Error>
            ) : password !== "" && password.length < 8 ? (
              <Error>يجب ان تكون كلمة السر 8 احرف/ارقام كحد ادنى</Error>
            ) : username !== "" && username.length < 5 ? (
              <Error>اسم المستخدم يجب ان يكون 5 احرف او أكثر</Error>
            ) : null}
            <Agreement htmlFor="false" style={{ marginTop: "10px" }}>
              <CheckBox
                type="checkbox"
                name="isAdmin"
                value={admin}
                onChange={(prev) => setAdmin((prev) => !prev)}
                id="false"
                required
              />
              قرأت و أوافق على <Link>سياسة خصوصية</Link> و{" "}
              <Link>قوانين</Link> الترا بريميوم
            </Agreement>
            <Button type="submit" disabled={isFetching ? true : false}>
              التسجيل
            </Button>
          </Form>
          <Options
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            هل لديك حساب بالفعل؟ اضغط هنا
          </Options>
        </Wrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default SignUp;
