import { Container,FilterInput ,Filter, Header, TaskDashboard } from "./styles";

import { IoFilterOutline } from "react-icons/io5";

export function Dashboard(){

    return(
        <Container>
             <Header>Minhas Tarefas</Header>

            <TaskDashboard>
                <Filter>
                    <IoFilterOutline size={18}/>
                    <FilterInput placeholder="Filter by keyword"></FilterInput>
                </Filter>
            </TaskDashboard>
        </Container>
    )
}