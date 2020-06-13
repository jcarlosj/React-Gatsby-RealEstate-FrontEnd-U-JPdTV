import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */ 
const 
    Nav = styled.nav `
        display: flex;
        flex-direction: column;
        padding-bottom: 3rem;

        @media ( min-width: 768px ) {
            flex-direction: row;
            padding: 0;
        }
    `,
    NavLink = styled( Link ) `
        color: white;
        font-family: 'PT Sans', sans-serif;
        font-weight: 700;
        margin-right: 1rem; 
        padding: .5rem;
        text-decoration: none;

        &:last-of-type {
            margin-right: 0;
        }

        &.current-page {
            border-bottom: 2px solid white;
        }
    `;

/** Component */
const Navigation = () => {
    return(
        <Nav>
            <NavLink 
                to="/us"
                activeClassName="current-page"
            >Nosotros</NavLink>
            <NavLink 
                to="/real-estate"
                activeClassName="current-page"
            >Propiedades</NavLink>
        </Nav>
    );
}

export default Navigation;