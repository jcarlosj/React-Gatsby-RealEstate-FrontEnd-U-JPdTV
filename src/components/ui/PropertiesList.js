import React, { useState, useEffect } from 'react';

/** Styles */
import '../../assets/css/ui-properties-list.css';

/** Style Modules */
import prpListStyle from '../../assets/css/modules/properties-list.module.css';

/** Components */
import PropertyPreview from './PropertyPreview';

/** Hooks */
import useProperties from '../../hooks/useProperties';
import useFilter from '../../hooks/useFilter';

/** Component */
const PropertiesList = () => {

    const 
        allProperties = useProperties(),                    // Get Data (Hook)               
        [ properties ] = useState( allProperties ),         // Define State
        [ filteredProperties, setFilteredProperties ] = useState( [] ),      // Define State
        { selectedCategory, filterUI } = useFilter();       // Hook Selector para filtrar propiedades

    console .log( 'PropertiesList (selectedCategory)', selectedCategory );

    /** Tracking State */
    useEffect( () => {
        if( selectedCategory ) {
            const filtered = properties .filter( realEstate => ( null !== realEstate .category && selectedCategory === realEstate .category .name ) );
            setFilteredProperties( filtered );      // Update State
        } else {
            setFilteredProperties( allProperties );
        }
    }, [ selectedCategory ] );

    return (
        <main id="properties-list">
            <h1>Nuestras propiedades</h1>
            
            { filterUI() }

            { ! filteredProperties
                ?   <p>No hay propiedades disponibles</p>
                :   <ul className={ prpListStyle .properties }>
                        { 
                            filteredProperties .map( property => (
                                <PropertyPreview 
                                    key={ property .id }
                                    property={ property }
                                />
                            ))
                        }
                    </ul>
            }
        </main>
    );
}

export default PropertiesList;