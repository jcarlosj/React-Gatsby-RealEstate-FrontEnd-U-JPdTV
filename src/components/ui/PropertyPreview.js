import React from 'react';
import Image from 'gatsby-image';

/** Components */
import Icons from './Icons';

/** Style Components */
import Card from '../style/Card';

/** Component */
const PropertyPreview = ({ property }) => {

    const { name, description, price, rooms, bathrooms, parking_lot, category, agent, picture } = property;

    return(
        <Card>
            <Image 
                fluid={ picture .sharp .fluid }
            />
            <div className="card-content">
                <h3>{ name }</h3>
                <p className="price">$ { price }</p>
                <Icons 
                    rooms={ rooms }
                    bathrooms={ bathrooms }
                    parking_lot={ parking_lot }
                />
            </div>
        </Card>
    );
}

export default PropertyPreview;