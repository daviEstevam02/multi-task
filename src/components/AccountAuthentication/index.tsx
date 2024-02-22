import { useAccounts } from "../../hooks/useAccounts";
import Button from "../Button";
import { Container, Content } from "./styles";

import { SiAzuredevops } from "react-icons/si"
import { FaGithub, FaTrello } from "react-icons/fa";

interface AccountAuthenticationSectionProps {
    isAccountConnectionsOpen: boolean;
}

export function AccountAuthenticationSection({ isAccountConnectionsOpen }: AccountAuthenticationSectionProps){
    const { azureAuthenticate } = useAccounts();
    return(
        <Container isAccountConnectionsOpen={isAccountConnectionsOpen}>
            <Content isAccountConnectionsOpen={isAccountConnectionsOpen}>
                <Button onClick={azureAuthenticate}  width="100%" backgroundColor="#008AD8"><SiAzuredevops size={20} /></Button>

                <Button onClick={azureAuthenticate}  width="100%" backgroundColor="#1f1f1f"><FaGithub size={20} /></Button>
            
                <Button onClick={azureAuthenticate}  width="100%" backgroundColor="#0079BF"><FaTrello size={20} /></Button>
            </Content>
        </Container>
    )
}