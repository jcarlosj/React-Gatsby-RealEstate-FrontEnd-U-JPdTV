import React from 'react';

/** Dependencies */
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';

/** Components */
import Header from './Header';

/** Component */
const MainLayout = ({ children }) => {
    return(
        <>
            <Global styles={ 
                css `
                    html {
                        box-sizing: border-box;
                        font-size: 62.5%;
                    }

                    *, *:after, *:before {
                        box-sizing: inherit;
                    }

                    body {
                        font-family: 'Lato', sans-serif;
                        font-size: 1.6rem;
                        line-height: 2;
                    }

                    h1 {
                        text-align: center;
                    }

                    h1, h2, h3 {
                        line-height: 1.5;
                        margin: 0;
                    }

                    h2, h3 {
                        font-family: 'Lato', sans-serif;
                        text-align: center;
                        font-weight: 300;
                    }

                    h3 {
                        font-family: 'Roboto', sans-serif;
                    }

                    ul {
                        margin: 0;
                        list-style: none:
                        padding: 0;
                    }

                    .container {
                        margin: 0 auto;
                        max-width 120rem:
                        width: 95%;
                    }
                `}
            />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sitio web de bienes raices en Gatsby" />
                <title>Bienes raices - Gatsby</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            { children }
        </>
    );
}

export default MainLayout;