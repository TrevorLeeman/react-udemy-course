import styled, {css} from 'styled-components';

const Spacer = styled.div(
    (props) => css`
        ${props.m ? `margin:${props.m}` : ''};
        ${props.mt ? `margin-top:${props.mt}` : ''};
        ${props.mr ? `margin-right:${props.mr}` : ''};
        ${props.mb ? `margin-bottom:${props.mb}` : ''};
        ${props.ml ? `margin-left:${props.ml}` : ''};

        ${props.p ? `padding:${props.p}` : ''};
        ${props.pt ? `padding-top:${props.pt}` : ''};
        ${props.pr ? `padding-right:${props.pr}` : ''};
        ${props.pb ? `padding-bottom:${props.pb}` : ''};
        ${props.pl ? `padding-left:${props.pl}` : ''};
    `
)

export default Spacer;