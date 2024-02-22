import { useUser } from "../../hooks/useUser";
import Button from "../Button";
import { Container, NavbarButtonContainer } from "./styles";

import { MdLogout } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

interface HeadbarProps{
    toggleSidebar: () => void;
    isOpen: boolean
}

export function Headbar({ toggleSidebar, isOpen }: HeadbarProps){

    const { signOut } = useUser();

    return(
        <Container>
            <NavbarButtonContainer isOpen={ isOpen }>
                <Button width="20px" backgroundColor="transparent" height="20px" onClick={toggleSidebar}>
                    <FiMenu size={22}/>
                </Button>
                <Button width="50px" backgroundColor="transparent" height="20px" onClick={signOut}>
                    <MdLogout size={22}/>
                </Button>
            </NavbarButtonContainer>
        </Container>
    )
}