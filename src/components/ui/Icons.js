import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/** Component */
const Icons = ({ rooms, bathrooms, parking_lot }) => {

    /** GraphQL Query */
    const { icons } = useStaticQuery( graphql `
        query {
            icons: allFile( filter: { relativeDirectory: { eq: "icons" } } ) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    ` );

    console .log( 'Icons', icons );

    return( 
        <ul>
            <li>{ rooms }</li>
            <li>{ bathrooms }</li>
            <li>{ parking_lot }</li>
        </ul>
    );
}

export default Icons;