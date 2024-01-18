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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 30px 0 0 0;
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
  object-fit: cover;
`

const ButtonContainer = styled.div`
  margin-top: 25px;
`

const Title = styled.h2`
  font-size: 16px;
  text-align: center;
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

const PinInput = styled.div`
  margin-top: 60px;
`

const PinInputField = styled.input`
    width: 50px;
    height: 55px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 5px;
`
const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    margin-top: 1rem;
`

const TimeText = styled.p`
  font-size: 16px;
`

const Timer = styled.p`
 font-size: 16px;
 margin-left: 0.5rem;
 font-weight: bold;
`

const ResendContainer = styled.div`
  display: flex;
  text-align: left;
  margin-top: 1rem;
  flex-direction: column;
`

const ResendText = styled.p`
  font-size: 16px;
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
    TitleContainer,
    PinInput,
    PinInputField,
    TimeText,
    TimeContainer,
    Timer,
    ResendContainer,
    ResendText
}