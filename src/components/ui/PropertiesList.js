import React from 'react';

/** Styles */
import '../../css/properties-list.css';

/** Hooks */
import useProperties from '../../hooks/useProperties';

/** Component */
const PropertiesList = () => {

    useProperties();

    return (
        <main id="properties-list">
            <h2>Nuestras propiedades</h2>
        </main>
    );
}

export default PropertiesList;