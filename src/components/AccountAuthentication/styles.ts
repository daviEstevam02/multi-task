import styled, { css } from "styled-components";


export const Container = styled.div<{isAccountConnectionsOpen: boolean}>`
    width: 200px;
    height: 200px;

    ${({ isAccountConnectionsOpen }) => !isAccountConnectionsOpen && css`
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease, opacity 0.3s ease;
        opacity: 0;
    `}

    transition: height 0.3s ease, opacity 0.3s ease;

    position: absolute;

    background-color: #fff;
    padding:0.5rem;
    right: 4rem;
`

export const Content = styled.div<{isAccountConnectionsOpen: boolean}>`
    ${({ isAccountConnectionsOpen }) => isAccountConnectionsOpen && css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
            margin-bottom: 1rem;
        }
    `}
   
`