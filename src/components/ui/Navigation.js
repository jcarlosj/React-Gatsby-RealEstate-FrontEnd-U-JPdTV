import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return(
        <nav>
            <Link to="/us">Nosotros</Link>
            <Link to="/real-estate">Propiedades</Link>
        </nav>
    );
}

export default Navigation;