import { Homeheader } from "../../components/Homeheader";
import { useUser } from "../../hooks/useUser";
import { Dashboard } from "./components/dashboard";
import {
  Container,
  HeaderText,
  HomeheaderSection,
  SubtitleText,
} from "./styles";

export function Home() {
  const { userData } = useUser();

  return (
    <Container>
      <HeaderText>Olá, {userData?.username} 👋🏼</HeaderText>
      <SubtitleText>Seja bem-vindo ao multitask</SubtitleText>
      <HomeheaderSection>
        <Homeheader />
      </HomeheaderSection>

      <Dashboard />
    </Container>
  );
}
