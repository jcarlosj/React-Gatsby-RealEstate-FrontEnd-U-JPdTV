import { useStaticQuery, graphql } from 'gatsby';

const useIndexPage = () => {
    
    /** Query GraphQL */
    const response = useStaticQuery( graphql `
        query {
            allStrapiPages( filter: { slug :{ eq: "home" } } ), {
                nodes {
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
    `);

    console .log( 'useIndexPage', response );
    
    return response .allStrapiPages .nodes .map( index => ({
        title: index .title,
        content: index .content,
        image: index .image
    }));
}

export default useIndexPage;