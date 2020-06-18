import { Link } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const Form = styled .form `
    display: flex;
    border: 1px solid #E1E1E1;
    margin: 2rem auto 0 auto;
    max-width: 120rem;
    width: 100%;

    select {
        appearance: none;
        border: none;
        flex: 1;
        font-family: 'Lato', sans-serif;
        padding: 1rem;

        option * {
            text-transform: capitalize;
        }
    }
`;

export default Form;