import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

/** Components */
import MainLayout from '../layout/MainLayout';
import Icons from '../ui/Icons';

/** GraphQL Query */
export const query = graphql `
    query( $id: String! ) {
        allStrapiRealEstate( filter: { id: { eq: $id } } ) {
            nodes {
                id
                name
                description
                price
                rooms
                bathrooms
                parking_lot
                category {
                    name
                }
                agent {
                    name
                    phone
                    email
                }
                picture {
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
const Property = ({ data: {  allStrapiRealEstate: { nodes } } }) => {
    const 
        { name, description, price, rooms, bathrooms, parking_lot, category, agent, picture } = nodes[ 0 ];

    return( 
        <MainLayout>
            <h1>{ name }</h1>
            <div>
                <main>
                    <Image 
                        fluid={ picture .sharp .fluid }
                        alt={ name }
                    />
                    <p>{ description }</p>
                </main>
                <aside>
                    <p className="price">$ { price }</p>
                    <Icons 
                        rooms={ rooms }
                        bathrooms={ bathrooms }
                        parking_lot={ parking_lot }
                    />
                    <div>
                        <h2>Agente comercial</h2>
                        <p>{ agent .name }</p>
                        <p>Teléfono: { agent .phone } </p>
                        <p>Email: { agent .email } </p>
                    </div>
                </aside>
            </div>
        </MainLayout>
    );
}

export default Property;