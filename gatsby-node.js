/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/** Dependencies */
const urlSlug = require( 'url-slug' );

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

    const registers = response .data .allStrapiRealEstate .nodes;

    console .log( 'createPages', registers );

    /** Recorre cada registro obtenido */
    registers .forEach( realEstate => {
        const slug = urlSlug( realEstate .name );       // Convierte un string en un slug

        console .group( 'name', realEstate .name );
        console .log( 'slug', slug );    
        console .groupEnd();
    });

}