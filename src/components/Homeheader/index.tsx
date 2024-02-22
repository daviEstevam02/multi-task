import Button from "../Button";

import { IoAddSharp } from "react-icons/io5";
import { Container } from "./styles";


interface HomeheaderProps {
    toggleAccountsConnection(): void;
}

export function Homeheader({ toggleAccountsConnection }: HomeheaderProps){

    return(
        <Container>
            <p>Teste</p>

            <Button 
                onClick={toggleAccountsConnection}
                width="170px" 
                color="#888" 
                backgroundColor="transparent"
                style={{ display: "flex", alignItems:"center", fontSize:"14px", justifyContent:"space-around" }}
                >
                    <IoAddSharp size={20}/>
                    Adicionar conta
            </Button>
        </Container>
    )
}