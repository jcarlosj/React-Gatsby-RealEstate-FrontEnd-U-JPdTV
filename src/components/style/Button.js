import { Link } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const Button = styled( Link ) `
    background-color: #75AB00;
    color: white;
    display: block;
    font-weight: 700;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;

`;

export default Button;