import { Container, HeaderContent } from "./styles";

interface SidebarProps {
    toggleSidebar: () => void;
    isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps){

    return(
        <Container isOpen={isOpen}>
            <HeaderContent>
                {/* <Button onClick={toggleSidebar} backgroundColor="transparent" color="#888" width="30px">
                    <RiMenu2Line size={20}/>
                </Button> */}
            </HeaderContent>
        </Container>
    )
}