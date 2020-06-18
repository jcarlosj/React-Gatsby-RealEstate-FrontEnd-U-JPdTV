/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const Content = styled .div `
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;

    @media ( min-width: 768px ) {
        column-gap: 5rem;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
`;

export default Content;