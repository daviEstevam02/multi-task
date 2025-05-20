import { TaskData } from "../../@types/tasks";
import API from "../api";

async function getAllTasks() {
  const { data } = await API.get<TaskData[]>("/tasks");
  return data;
}

export { getAllTasks };
