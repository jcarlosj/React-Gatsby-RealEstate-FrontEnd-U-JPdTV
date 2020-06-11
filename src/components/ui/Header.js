import React from 'react';
import { Link } from 'gatsby';

/** Components */
import Navigation from './Navigation';

/** Component */
const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">Bienes raices</Link>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;