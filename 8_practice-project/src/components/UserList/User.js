import styled from "styled-components";
import {darken} from "polished";
import Flex from "../Utility/Flex";

const StyledUser = styled.div`
    background-color: rgb(129, 117, 255);
    border: 2px solid ${darken(0.2, 'rgb(129, 117, 255)')};
    padding: 1em;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
`

const User = (props) => {
    const deleteUser = () => {
        props.deleteUser(props.id);
    }

    return (
        <StyledUser onClick={deleteUser} title={`Delete ${props.username}`}>
            <Flex justifyContent="space-between">
                <span>{props.username}</span>
                <span>{props.age} years old</span>
            </Flex>
        </StyledUser>
    )
}

export default User
