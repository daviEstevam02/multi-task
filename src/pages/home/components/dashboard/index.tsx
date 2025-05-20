import { useEffect, useMemo, useState } from "react";
import {
  Container,
  FilterInput,
  Filter,
  Header,
  TaskHeader,
  TaskContainer,
} from "./styles";

import { IoFilterOutline } from "react-icons/io5";
import { getAllTasks } from "../../../../services/task-services/taskServices";
import { swalToast } from "../../../../components/CustomToast";
import TableComponent from "../../../../components/Table/table";

export function Dashboard() {
  const [tasks, setTasks] = useState<
    {
      title: string;
      status: string;
      assignedTo: string;
      createdBy: string;
    }[]
  >();
  console.log(tasks);
  async function getTasks() {
    const data = await getAllTasks();

    setTasks(
      data?.map((task) => ({
        title: task?.title,
        status: task?.status,
        assignedTo: task?.assignedTo?.name,
        createdBy: task?.createdBy?.name,
      }))
    );
  }

  async function tryGetTasks() {
    try {
      await getTasks();
    } catch (error) {
      swalToast({
        status: "error",
        description: "não foi possivel dar seguimento",
        title: "Ops! Algo deu errado",
      });
    }
  }
  useEffect(() => {
    (async () => {
      await tryGetTasks();
    })();
  }, []);

  const columns = useMemo(
    () => [
      { header: "Title", accessor: "title" },
      { header: "Status", accessor: "status" },
      { header: "Assigned To", accessor: "assignedTo" },
      { header: "Created by", accessor: "createdBy" },
    ],
    [tasks]
  );

  return (
    <Container>
      <Header>Minhas Tarefas</Header>

      <TaskHeader>
        <Filter>
          <IoFilterOutline size={18} />
          <FilterInput placeholder="Filter by keyword"></FilterInput>
        </Filter>
      </TaskHeader>
      <TaskContainer>
        <TableComponent columns={columns} data={tasks!} />
      </TaskContainer>
    </Container>
  );
}
