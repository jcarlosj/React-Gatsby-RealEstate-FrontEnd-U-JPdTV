import { useStaticQuery, graphql } from 'gatsby';

const useIndexPage = () => {
    
    /** Query GraphQL */
    const response = useStaticQuery( graphql `
        query {
            allStrapiPages( filter: { title :{ eq: "Home" } } ), {
                nodes {
                    title
                    content
                    image {
                        publicURL
                    }
                }
            }
        }
    `);

    console .log( 'useIndexPage', response );
}

export default useIndexPage;