import { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import LabelInput from "./LabelInput";
import Spacer from "../Utility/Spacer";
import Button from "../UI/Button";

const StyledForm = styled.form`
    width: 400px;
`

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChange = (currentValue) => {
        setUsername(currentValue);
    }

    const ageChange = (currentValue) => {
        setAge(currentValue);
    }

    const validateForm = (event) => {
        event.preventDefault();
        let message = '';
        let valid = false;

        if(username.trim().length == 0){
            message = 'Please enter a username';
        }else if(age.trim().length == 0){
            message = 'Please enter an age';
        }else if(age <= 0){
            message = 'Age must be greater than 0';
        }else{
            valid = true;
            props.addUser(username, age);
        }

        if(!valid){
            props.showError(message);
        }
    }

    return(
        <Spacer mt="3em">
            <Card>
                <StyledForm onSubmit={validateForm}>
                    <LabelInput label="Username" inputType="text" setCurrentValue={usernameChange}/>
                    <LabelInput label="Age (Years)" inputType="number" setCurrentValue={ageChange}/>
                    <Spacer mt="1em">
                        <Button type="submit">Add User</Button>
                    </Spacer>
                </StyledForm>
            </Card>
        </Spacer>
    )
}

export default Form;