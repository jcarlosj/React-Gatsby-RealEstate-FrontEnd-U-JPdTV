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
        [ properties, setProperties ] = useState([]),       // Define State
        { selectedCategory, filterUI } = useFilter();                         // Hook Selector para filtrar propiedades

    console .log( 'PropertiesList (selectedCategory)', selectedCategory );

    /** Tracking State */
    useEffect( () => {
        setProperties( allProperties );
    }, [] );

    return (
        <main id="properties-list">
            <h1>Nuestras propiedades</h1>
            
            { filterUI() }

            { ! properties
                ?   <p>No hay propiedades disponibles</p>
                :   <ul className={ prpListStyle .properties }>
                        { 
                            properties .map( property => (
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