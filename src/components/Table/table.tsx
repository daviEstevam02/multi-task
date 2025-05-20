import React from "react";
import { Cell, Footer, Header, Row, Table } from "./styles";

interface Column {
  header: string;
  footer?: string;
  accessor: string;
}

interface TaskTableProps {
  columns: Column[];
  data: any[];
}

const TableComponent: React.FC<TaskTableProps> = ({ columns, data }) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((col) => (
            <Header key={col.accessor}>{col.header}</Header>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, idx) => (
          <Row key={idx}>
            {columns.map((col) => (
              <Cell key={col.accessor}>{row[col.accessor]}</Cell>
            ))}
          </Row>
        ))}
      </tbody>
      {columns.some((col) => col.footer) && (
        <Footer>
          <tr>
            {columns.map((col) => (
              <Cell key={col.accessor}>{col.footer || ""}</Cell>
            ))}
          </tr>
        </Footer>
      )}
    </Table>
  );
};

export default TableComponent;
