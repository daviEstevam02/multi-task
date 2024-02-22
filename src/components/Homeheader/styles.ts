import styled from "styled-components"

interface HomeheaderProps{
    width?: string;
}

export const Container = styled.div<HomeheaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    padding: 0 2rem;

    position: relative;

`