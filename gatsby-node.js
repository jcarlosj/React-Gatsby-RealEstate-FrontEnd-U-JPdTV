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

    // console .log( 'createPages', registers );

    /** Recorre cada registro obtenido */
    registers .forEach( realEstate => {

        /** Crea páginas dinámicamente */
        actions .createPage({
            path: urlSlug( realEstate .name ),                                  // Convierte un string en un slug y asigna como ruta para la nueva página
            component: require .resolve( './src/components/page/Property.js' ), // Componente que renderiza la apariencia de la página (No olvidar la extensión del archivo o fallará)
            context: {                                                          // Valores que se van a pasar al componente que renderiza la apariencia
                id: realEstate .id
            }
        });
    });

}