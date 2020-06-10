import React from 'react';

/** Dependencies */
import { Helmet } from 'react-helmet';

const MainLayout = ({ children }) => {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sitio web de bienes raices en Gatsby" />
                <title>Bienes raices - Gatsby</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            { children }
        </>
    );
}

export default MainLayout;