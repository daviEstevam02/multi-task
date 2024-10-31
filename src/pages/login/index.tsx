import { Container, LoginBox, Image as Img, Form, ImageContainer, ButtonContainer, InputContainer, Title, StrongTitle, SubTitle, TitleContainer } from "./styles";
import loginImg from "../../assets/login.jpg"
import { Input, Button, LogoIcon } from "../../components"
import { useUser, useAccounts } from "../../hooks";
import { Controller, useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";

interface LoginFrom {
    email: string
}

export function Login(){
    const { handleSubmit, control } = useForm<LoginFrom>();
    const { signIn } = useUser();
    const { push } = useHistory();

    const { azureAuthenticate } = useAccounts();

    function handleClickSubmit(email: string){
        push({
            pathname: `/OnePassCodeAuthentication`,
            state:{
                userEmail: email
            }
        })
    }

    function onSubmit({ email }: LoginFrom){
        signIn(email);
        handleClickSubmit(email);
    }

    return (
        <Container>
            <LoginBox>
                <Form>
                    <TitleContainer>
                    <Title>
                        SEJA BEM-VINDO AO <StrongTitle>MULTITASK</StrongTitle>
                    </Title>
                    <SubTitle>Antes de continuar, faça seu Login.</SubTitle>
                    </TitleContainer>
                    <InputContainer>
                    <Controller
                        name="email"
                        control={control}
                        render={({
                        field: {
                            name, value, onChange,
                        },
                        }) => (
                            <Input 
                            placeholder="Email" 
                            name={name}
                            value={value}
                            onChange={onChange}
                            width="400px" 
                            type="email"
                        />
                        )}
                    />
                    </InputContainer>
                    <ButtonContainer>
                        <Button type="submit" onClick={handleSubmit(onSubmit)}>Acessar minha conta</Button>
                        <Button 
                            backgroundColor="#fff"
                            onClick={azureAuthenticate}
                            color="#000"
                            border="1px solid #e4e4e4"
                            style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:"10px" }}
                        > <LogoIcon iconStyle={{ margin: "10px" }} iconName="microsoft"/>  Logar com  Microsoft</Button>
                         <Button 
                            backgroundColor="#fff"
                            onClick={azureAuthenticate}
                            color="#000"
                            border="1px solid #e4e4e4"
                            style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:"10px" }}
                        > <LogoIcon iconStyle={{ margin: "10px" }}  iconName="github"/>  Logar com github</Button>
                    </ButtonContainer>
                </Form>
                <ImageContainer>
                    <Img src={loginImg}/>
                </ImageContainer>
            </LoginBox>
        </Container>
    )
}