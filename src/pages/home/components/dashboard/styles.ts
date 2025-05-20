import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 500px;
  margin: 2rem 0;
`;

export const Header = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;
export const TaskHeader = styled.section`
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  text-align: center;
`;

export const TaskDashboardColumns = styled.section`
  display: flex;
  text-align: center;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 1rem;
`;

export const TaskColumn = styled.div`
  padding: 1rem;
`;
export const TaskContainer = styled.div`
  margin-top: 1rem;
`;

export const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  background-color: #fff;
  padding: 0 1rem;
`;

export const TaskText = styled.p`
  max-width: 250px;
`;

export const Filter = styled.div`
  width: 100%;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;

  padding: 0 1.5rem;
`;

export const FilterInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 13px;
  letter-spacing: 1.2px;
`;
