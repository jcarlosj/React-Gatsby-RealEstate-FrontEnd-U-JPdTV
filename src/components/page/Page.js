import React from 'react';

/** Components */
import MainLayout from '../layout/MainLayout';

/** GraphQL Query */
export const query = graphql `
    query( $id: String!) {
        allStrapiPages ( filter: { id: { eq: $id } } ) {
            nodes{
                title
                content
                image {
                    sharp: childImageSharp {
                        fluid( maxWidth: 1200 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

/** Dynamic Page Component */
const Page = ({ data: {  allStrapiPages: { nodes } } }) => {

    console .log( 'Page', nodes );

    const 
        { title, content } = nodes[ 0 ];

    return( 
        <MainLayout>
            <h1>{ title }</h1>
            <p>{ content }</p>
        </MainLayout>
    );
}

export default Page;