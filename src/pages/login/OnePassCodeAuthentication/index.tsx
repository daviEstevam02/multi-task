import { Controller, useForm } from "react-hook-form";
import { LoginBox, Container, ImageContainer, Image, Form, PinInput, PinInputField, TimeText, TimeContainer, Title, Timer, ButtonContainer, ResendContainer, ResendText } from "./styles";
import img from "../../../assets/onepasscodeimg.png"
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useUser } from "../../../hooks/useUser";
import { useLocation } from "react-router-dom";
import { swalToast } from "../../../components/CustomToast";

interface LocationProps{ 
    userEmail: string;
}

export function OnePassCodeAuthentication(){
    const length = 4
    const { control, handleSubmit, setValue } = useForm();
    const { verifyOnePassCode, signIn, } = useUser();
    const [timeRemainingText, setTimeRemainingText] = useState("05:00");
    const [time, setTime] = useState(300);
    const { state } = useLocation<LocationProps>();


    const handlePaste = ({ e, index }: any) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain');
    
        for (let i = 0; i < pastedData.length && index + i < length; i++) {
          setValue(`pin[${index + i}]`, pastedData.charAt(i));
        }
      };

    async function onSubmit(data: any) {
       const onePassCode = data.pin.join('');
        await verifyOnePassCode(state.userEmail, onePassCode)
    }

    function tryResentCode(){
        signIn(state.userEmail);
    }

    function resentCode() {
        try{
            tryResentCode();
        }catch(error){
            swalToast({ status: "error", description: "não foi possivel dar seguimento", title: "Ops! Algo deu errado" })
        }
    }

    function countdown(timeRemaining: number) {
        if (timeRemaining >= 1) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = Math.floor(timeRemaining % 60);

        const horaImprimivel = `${String(minutes).padStart(2, "0")}:${String(
            seconds,
        ).padStart(2, "0")}`;
        return horaImprimivel;
        }
        return "00:00";
    }

    useEffect(() => {
        const handler = setTimeout(() => {
        const horaImprimivel = countdown(time);
        setTimeRemainingText(horaImprimivel);
        if (time === 0) return;
        setTime(time - 1);
        }, 1000);
        return () => {
        clearTimeout(handler);
        };
    }, [time]);

    return(
        <Container>
            <LoginBox>
                <ImageContainer>
                    <Image src={img}/>
                </ImageContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>DIGITE O CÓDIGO ENVIADO POR E-MAIL <br/>PARA PROSSEGUIR</Title>

                    <PinInput>
                    {[...Array(length)].map((_, index) => (
                        <Controller
                            key={index}
                            name={`pin[${index}]`}
                            control={control}
                            defaultValue=""
                            render={({ field: {value, onChange} }) => (
                                <PinInputField
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={onChange}
                                onPaste={(e) => handlePaste({ e, index })}
                            />
                            )}
                        />
                    ))}
                    </PinInput>
                    <TimeContainer>
                        <TimeText>Código expira em: </TimeText>
                        <Timer>{ timeRemainingText }</Timer>
                    </TimeContainer>

                    <ResendContainer>
                        <ResendText>
                            Não recebeu o código?
                        </ResendText>
                        <Button 
                            variant="link"
                            width="300px" 
                            onClick={resentCode}
                        >Enviar novamente</Button>
                    </ResendContainer>

                    <ButtonContainer>
                        <Button width="300px" type="submit">Acessar minha conta</Button>
                    </ButtonContainer>
                </Form>
               
            </LoginBox>
        </Container>
    )
}