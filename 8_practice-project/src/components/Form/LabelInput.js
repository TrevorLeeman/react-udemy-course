import styled from "styled-components";

const LabelInputWrap = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 0.5em;
`

const Label = styled.label`
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.15em;
`

const Input = styled.input`
    padding: 1.2em;
    width: 100%;
    font-size: 1.2em;

    &:hover{
        background-color: rgb(248, 240, 251);
    }

    &:focus,:hover{
        border: 2px solid black;
        border-radius: 0.375em;
    }
`

const LabelInput = (props) => {
    const setValue = (event) => {
        props.setCurrentValue(event.target.value);
    }

    return(
        <LabelInputWrap>
            <Label>{props.label}</Label>
            <Input type={props.inputType} onChange={setValue}></Input>
        </LabelInputWrap>
    )
}

export default LabelInput;