import styled, {css} from "styled-components";

const Flex = styled.div(
    ({
        display = 'flex',
        flexDirection = 'auto',
        justifyContent = 'auto',
        alignItems = 'auto',
        flexWrap = 'auto',
        gap = 'auto'
    }) => css`
        display: ${display};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        flex-wrap: ${flexWrap};
        gap: ${gap};
    `
)

export default Flex;
