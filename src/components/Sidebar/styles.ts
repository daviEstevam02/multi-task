import styled, { css } from "styled-components";

interface SidebarProps {
    isOpen?: boolean
}

export const Container = styled.div<SidebarProps>`
    margin-right: 3rem;
    width: 300px;
    height: 100vh;
    position: relative;
    z-index: 2;
    float: left;
    ${({ isOpen }) => !isOpen && css`
        width: 0;
        overflow: hidden;
        transition: width 0.5s ease, opacity 0.5s ease;
        opacity: 0;
    `}
    transition: width 0.5s ease, opacity 0.5s ease;
    background-color: #fff;

    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15);
`

export const HeaderContent = styled.div<SidebarProps>`
    width: 100%;
    text-align: right;
    padding: 1rem 2rem;
`