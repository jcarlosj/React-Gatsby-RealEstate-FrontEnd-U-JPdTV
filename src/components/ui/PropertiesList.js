import React, { useState, useEffect } from 'react';

/** Styles */
import '../../css/properties-list.css';

/** Style Modules */
import propertiesList from '../../css/modules/properties-list.module.css';

/** Components */
import PropertyPreview from './PropertyPreview';

/** Hooks */
import useProperties from '../../hooks/useProperties';

/** Component */
const PropertiesList = () => {

    const 
        allProperties = useProperties(),                    // Get Data (Hook)               
        [ properties, setProperties ] = useState([]);       // Define State

    /** Tracking State */
    useEffect( () => {
        setProperties( allProperties );
    }, [] );

    return (
        <main id="properties-list">
            <h1>Nuestras propiedades</h1>
            
            { ! properties
                ?   <p>No hay propiedades disponibles</p>
                :   <ul className={ propertiesList .properties }>
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