
import {  
    Container,
    Content,
    TaskAssigned,
    TaskDescription,
    TaskNumber,
    TaskTitle,
} from "./styles"

export function TaskHeader(){
    return(
        <Container>
            <Content>
                <TaskDescription>
                <TaskNumber>
                    94395
                </TaskNumber>
                <TaskTitle></TaskTitle>
                </TaskDescription>
                <TaskAssigned></TaskAssigned>
            </Content>
        </Container>
    )
}