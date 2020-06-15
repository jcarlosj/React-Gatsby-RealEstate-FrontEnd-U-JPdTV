/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/** Crea páginas dinámicas */
exports .createPages = async ({ actions, graphql, reporter }) => {

    /** GraphQL Query */
    const response = await graphql( `
        query {
            allStrapiRealEstate {
                nodes {
                    id
                    name
                }
            }
        }
    `);

    /** Valida si no se obtuvo resultados */
    if( response .errors ) {
        reporter .panic( 'No se obtuvo resultados', response .errors );
    }

    console .log( 'createPages', JSON .stringify( response ) );

}