import React from 'react';

/** Component */
const PropertyPreview = ({ property }) => {

    const { name, description, price, rooms, bathrooms, parking_lot, category, agent, picture } = property;

    return(
        <> 
            <li>
                <h3>{ name }</h3>
                <p>{ description }</p>
                <p>{ price }</p>
            </li>
        </>
    );
}

export default PropertyPreview;