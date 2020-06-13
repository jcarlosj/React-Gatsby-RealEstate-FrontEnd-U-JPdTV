import React from 'react';

/** Components */
import Icons from './Icons';

/** Component */
const PropertyPreview = ({ property }) => {

    const { name, description, price, rooms, bathrooms, parking_lot, category, agent, picture } = property;

    return(
        <> 
            <li>
                <h3>{ name }</h3>
                <p>{ price }</p>
                <Icons 
                    rooms={ rooms }
                    bathrooms={ bathrooms }
                    parking_lot={ parking_lot }
                />
            </li>
        </>
    );
}

export default PropertyPreview;