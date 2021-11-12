import styled from "styled-components";
import Card from '../UI/Card';
import User from './User';
import Spacer from '../Utility/Spacer';
import Flex from "../Utility/Flex";

const StyledUserList = styled.div`
    width: 500px;
`

const UserList = (props) => {
    const deleteUser = (index) => {
        props.deleteUser(index);
    }

    const usersOutput = props.userArray.map((userInfo, index) => <User key={index} username={userInfo.username} age={userInfo.age} deleteUser={deleteUser} id={index} />)

    return (
        <Spacer mt="3em" pb="3em">
            <Card>
                <StyledUserList>
                    <Flex flexDirection="column-reverse" gap="1.2em">
                        {usersOutput}
                    </Flex>  
                </StyledUserList>
            </Card>
        </Spacer>
    )
}

export default UserList
