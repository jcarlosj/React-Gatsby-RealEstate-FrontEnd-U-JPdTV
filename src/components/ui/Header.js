import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

/** Dependencies */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** Components */
import Navigation from './Navigation';

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

/** Component */
const Header = () => {

    /** Query GraphQL para obtener la URL del Logo */
    const { logo } = useStaticQuery( graphql `
        query {
            logo: file( relativePath: { eq: "logo.svg" } ), {
                publicURL
            }
        }
    `);

    console .log( 'Logo', logo );

    return(
        <header css={ css `
            background-color: #0D283B;
            padding: 1rem;
        `}>
            <div css={ css `
                margin: 0 auto;
                max-width: 120rem;
                text-align: center;

                @media ( min-width: 768px ) {
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                }
            `}>
                <Logo to="/" >
                    <img 
                        src={ logo .publicURL } 
                        alt="Gatsby Inmobiliaria" 
                    />
                    <h2>Gatsby <span>Inmobiliaria</span></h2>
                </Logo>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;