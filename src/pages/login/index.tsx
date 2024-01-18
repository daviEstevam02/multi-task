import { Container, LoginBox, Image as Img, Form, ImageContainer, ButtonContainer, InputContainer, Title, StrongTitle, SubTitle, TitleContainer } from "./styles";
import loginImg from "../../assets/login.jpg"
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Controller, useForm } from "react-hook-form"
import { useUser } from "../../hooks/useUser";
import { useHistory } from "react-router-dom";

interface LoginFrom {
    email: string
}

export function Login(){

    const { handleSubmit, control } = useForm<LoginFrom>();
    const { signIn } = useUser();
    const { push } = useHistory();

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TitleContainer>
                    <Title>
                        SEJA BEM-VINDO AO <StrongTitle>PASSWORDLESS</StrongTitle>
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
                        <Button type="submit">Acessar minha conta</Button>
                    </ButtonContainer>
                </Form>
                <ImageContainer>
                    <Img src={loginImg}/>
                </ImageContainer>
            </LoginBox>
        </Container>
    )
}