import styled, {css} from 'styled-components';

const Spacer = styled.div(
    ({
        m = '0',
        mt,
        mr,
        mb,
        ml,

        p = '0',
        pt,
        pr,
        pb,
        pl,
    }) => css`
        margin-top: ${mt ?? m};
        margin-right: ${mr ?? m};
        margin-bottom: ${mb ?? m};
        margin-left: ${ml ?? m};

        padding-top: ${pt ?? p};
        padding-right: ${pr ?? p};
        padding-bottom: ${pb ?? p};
        padding-left: ${pl ?? p};
    `
)

export default Spacer;