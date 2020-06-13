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

    const pathIcons = icons .edges;

    return( 
        <ul>
            <li>
                <img src={ pathIcons[ 1 ] .node .publicURL } alt="Habitaciones" />
                <p>{ rooms }</p>
            </li>
            <li>
                <img src={ pathIcons[ 2 ] .node .publicURL } alt="Baños" />
                <p>{ bathrooms }</p>
            </li>
            <li>
                <img src={ pathIcons[ 0 ] .node .publicURL } alt="Parqueadero" />
                <p>{ parking_lot }</p>
            </li>
        </ul>
    );
}

export default Icons;