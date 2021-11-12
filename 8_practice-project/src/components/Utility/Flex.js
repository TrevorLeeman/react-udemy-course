import styled, {css} from "styled-components";

const Flex = styled.div(
    (props) => css`
        display: ${props.display ?? `flex`};
        ${props.direction ? `flex-direction:${props.direction}` : ''};
        ${props.justifyContent ? `justify-content:${props.justifyContent}` : ''};
        ${props.alignItems ? `align-items:${props.alignItems}` : ''};
        ${props.flexWrap ? `flex-wrap:${props.flexWrap}` : ''};
        ${props.gap ? `gap:${props.gap}` : ''};
    `
)

export default Flex;
