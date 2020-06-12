import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Component */
const Banner = () => {

    /** GraphQL Query */
    const { image } = useStaticQuery( graphql `
        query {
            image: file ( relativePath: { eq: "encuentra.jpg" } ) {
                publicURL
            }
        }
    `);

    console .log( 'Banner', image );

    return( 
        <>
            <h2>Banner</h2>
        </> 
    );
}

export default Banner;