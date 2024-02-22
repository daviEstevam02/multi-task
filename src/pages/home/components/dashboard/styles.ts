import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    min-height: 500px;
    margin: 2rem 0;
`

export const Header = styled.h3`
    font-size: 18px;
    font-weight: 500;
`
export const TaskDashboard = styled.section`
    height: 80%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    text-align: center;
`
export const Filter = styled.div`
    width: 100%;
    background-color: #F2F2F2;

    display: flex;
    align-items: center;

    padding: 0 1.5rem;
`

export const FilterInput =  styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 1rem;
    outline: none;
    font-size: 13px;
    letter-spacing: 1.2px;
`