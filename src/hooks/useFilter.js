import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/** Style Component */
import Form from '../components/style/Form';

/** Hook */
const useFilter = () => {

    /** Define State */
    const [ selectedCategory, setselectedCategory ] = useState( '' ); 

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
        <Form>
            <select
                onChange={ event => setselectedCategory( event .target .value ) }
                value={ selectedCategory }
            >
                <option value="">filtrar</option>
                { categories .map( option => (
                    <option 
                        key={ option .id }
                        value={ option .name }
                    >{ option .name }</option>
                )) }
            </select>
        </Form>
    );

    return {
        selectedCategory,   // State
        filterUI            // Functionality
    }

}

export default useFilter;