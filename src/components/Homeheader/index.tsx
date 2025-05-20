import Button from "../Button";

import { IoAddSharp } from "react-icons/io5";
import { Container } from "./styles";
import { useDisclosure } from "../../hooks/useDisclosure";
import { CreateTask } from "../../pages/task/CreateTask";

export function Homeheader() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Container>
        <p>Work items</p>

        <Button
          onClick={onOpen}
          width="170px"
          color="#888"
          backgroundColor="transparent"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            justifyContent: "space-around",
          }}
        >
          <IoAddSharp size={20} />
          New Work Item
        </Button>
      </Container>
      <CreateTask isOpen={isOpen} onClose={onClose} />
    </>
  );
}
