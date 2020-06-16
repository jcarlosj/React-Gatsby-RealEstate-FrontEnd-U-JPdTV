import React from 'react';
import Image from 'gatsby-image';

/** Dependencies */
import urlSlug from 'url-slug';

/** Components */
import Icons from './Icons';

/** Style Components */
import Card from '../style/Card';
import Button from '../style/Button';

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
            <Button
                to={ urlSlug( name ) }
            >Ver propiedad</Button>
        </Card>
    );
}

export default PropertyPreview;