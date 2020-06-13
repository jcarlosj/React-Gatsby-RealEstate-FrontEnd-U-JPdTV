/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const Card = styled .li `
    border: 1px solid #E1E1E1;
    list-style: none;

    img {
        max-width: 100%;
    }

    .card-content {
        padding: 2rem;
        
        h3 {
            font-family: 'Lato', sans-serif;
            font-size: 2.4rem;
            margin: 0 0 2rem 0;
        }

        .price {
            color: #75AB00;
            font-size: 2.4rem;
            text-align: center;
        }
    }
`;

export default Card;