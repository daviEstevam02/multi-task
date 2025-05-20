export interface TaskData {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  createdById: string;
  assignedToId: string;
  assignedTo: {
    id: string;
    name: string;
    email: string;
  };
  createdBy: {
    id: string;
    name: string;
    email: string;
  };
}
