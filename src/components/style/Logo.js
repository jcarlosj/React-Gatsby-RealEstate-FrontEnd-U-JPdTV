import { Link, useStaticQuery, graphql } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const Logo = styled( Link ) `
    color: white;
    display: flex;
    text-decoration: none;

    h2 {
        padding-left: 1rem;

        span {
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    img {
        width: 4rem;
    }
`;

export default Logo;