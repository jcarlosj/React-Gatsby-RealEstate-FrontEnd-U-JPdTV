import { useStaticQuery, graphql } from 'gatsby';

const useProperties = () => {

    /** Query GraphQL */
    const response = useStaticQuery( graphql `
        query {
            allStrapiRealEstate {
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
                            fluid( maxWidth: 600, maxHeight: 400 ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    ` );

    console .log( 'useProperties', response );

    return response .allStrapiRealEstate .nodes .map( property => ({
        id: property .id,
        name: property .name,
        description: property .description,
        price: property .price,
        rooms: property .rooms,
        bathrooms: property .bathrooms,
        parking_lot: property .parking_lot,
        category: property .category,
        agent: property .agent,
        picture: property .picture
    }));
}

export default useProperties;