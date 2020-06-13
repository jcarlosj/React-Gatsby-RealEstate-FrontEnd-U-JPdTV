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
}

export default useProperties;