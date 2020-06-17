import React from 'react';
import { graphql } from 'gatsby';

/** Components */
import MainLayout from '../layout/MainLayout';

/** GraphQL Query */
export const query = graphql `
    query( $id: String! ) {
        allStrapiRealEstate( filter: { id: { eq: $id } } ) {
            nodes {
                id
                name
            }
        }
    }
`;

/** Dynamic Page Component */
const Property = ({ data }) => {

    console .log( 'Property', data );

    return( 
        <MainLayout>
            <h1>Propiedad</h1>
        </MainLayout>
    );
}

export default Property;