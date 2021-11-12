import styled from "styled-components";
import {darken} from "polished";

const Button = styled.button`
    padding: 1.2em;
    border-radius: 0.2em;
    background-color: rgb(219, 39, 99);
    border: none;
    color: white;
    cursor: pointer;
    width: 100%;
    font-size: 1.2em;

    &:hover{
        background-color: ${darken(0.05, 'rgb(219, 41, 100)')};
    }
`

export default Button
