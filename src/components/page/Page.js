import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

/** Style Components */
import Content from '../style/Content';
import PropertiesList from '../ui/PropertiesList';

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
        { title, content, image } = nodes[ 0 ];

    return( 
        <MainLayout>
            <main>
                <h1>{ title }</h1>
                <Content>  
                    <Image 
                        fluid={ image .sharp .fluid }
                        alt={ title }
                    />
                    <p>{ content }</p>
                </Content>

                {/** Despliega componente si el titulo de la pagina coincide */}
                { title .toLowerCase() === 'propiedades' && (
                    <PropertiesList />
                )}

            </main>
        </MainLayout>
    );
}

export default Page;