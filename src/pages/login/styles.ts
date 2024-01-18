import styled from "styled-components";

const Container = styled.div`
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: block;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 1120px;
  min-height: 500px;
  background-color: #fff;
  z-index: 99;
  position: relative;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  padding: 0 37px 55px 45px;
`

const Form = styled.form `
  flex:1;
  display: flex;
  flex-direction: column;

`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ButtonContainer = styled.div`
  margin: 30px 0;
`

const InputContainer = styled.div`
  /* margin: 0 auto; */
  width: 400px;
`

const Title = styled.h2`
  font-size: 18px;
`

const StrongTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`

const SubTitle = styled.p`
  font-size: 14px;
`
const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 30px;

`
export {
    Container,
    LoginBox,
    Image,
    Form,
    ImageContainer,
    ButtonContainer,
    InputContainer,
    Title,
    StrongTitle,
    SubTitle,
    TitleContainer
}