import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import { css } from '@emotion/core';

/** Components */
import Navigation from './Navigation';

/** Component */
const Header = () => {
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
                <Link to="/">Bienes raices</Link>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;