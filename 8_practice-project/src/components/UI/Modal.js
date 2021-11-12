import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import Flex from "../Utility/Flex";

const ModalBackground = styled.div`
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.5);
`

const PositionModal = styled.div`
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const StyledModal = styled.div`
    width: 500px;
    height: 500px;
    background-color: white;
    height: 100%;
`

const ModalMessage = styled.p`
    font-size: 1.5em;
    margin-bottom: 1em;
`

const Modal = (props) => {
    return (
        <>
            <PositionModal>
                <Card>
                    <StyledModal>
                        <Flex direction="column" justifyContent="space-between">
                            <ModalMessage>{props.message}</ModalMessage>
                            <Button onClick={props.closeModal}>{props.buttonText ?? 'Close'}</Button>
                        </Flex>
                    </StyledModal>
                </Card>
                
            </PositionModal>
            <ModalBackground onClick={props.closeModal} />
        </>
    )
}

export default Modal
