import Button from "../Button";

import { IoAddSharp } from "react-icons/io5";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

export function Homeheader(){

    const { push } = useHistory();

    return(
        <Container>
            <p>Teste</p>

            <Button 
                onClick={() =>
                    push({
                      pathname: `/work-item/create`
                    })
                  }
                width="170px" 
                color="#888" 
                backgroundColor="transparent"
                style={{ display: "flex", alignItems:"center", fontSize:"14px", justifyContent:"space-around" }}
                >
                    <IoAddSharp size={20}/>
                    New Work Item
            </Button>
        </Container>
    )
}