import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/** Hook */
const useFilter = () => {

    /** GraphQL Query */
    const response = useStaticQuery( graphql `
        query {
            allStrapiCategories {
                nodes {
                    id
                    name
                }
            }
        }
    ` );

    console .log( 'useFilter', response );

    const categories = response .allStrapiCategories .nodes;
    
    const filterUI = () => (        // Return Implicito
        <form>
            <select>
                <option value="">Filtrar</option>
                { categories .map( option => (
                    <option 
                        key={ option .id }
                        value={ option .name }
                    >{ option .name }</option>
                )) }
            </select>
        </form>
    );

    return {
        filterUI
    }

}

export default useFilter;