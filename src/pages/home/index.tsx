import { useState } from "react";
import { Homeheader } from "../../components/Homeheader";
import { useUser } from "../../hooks/useUser";
import { Dashboard } from "./components/dashboard";
import { Container, HeaderText, HomeheaderSection, SubtitleText } from "./styles";

import { AccountAuthenticationSection } from "../../components/AccountAuthentication"; 


export function Home(){
    const { userData } = useUser();

    const [isAccountConnectionsOpen, setIsAccountConnectionsOpen] = useState(false);

    function toggleAccountsConnection(){
      setIsAccountConnectionsOpen(!isAccountConnectionsOpen);
    }

    return(
        <Container>
          <HeaderText>
            Olá, {userData?.username} 👋🏼
          </HeaderText>
          <SubtitleText>
            Seja bem-vindo ao multitask
          </SubtitleText>
          <HomeheaderSection>
             <Homeheader toggleAccountsConnection={toggleAccountsConnection}/>
          <AccountAuthenticationSection isAccountConnectionsOpen={isAccountConnectionsOpen}/>

          </HomeheaderSection>

          <Dashboard />

        </Container>
    )
}