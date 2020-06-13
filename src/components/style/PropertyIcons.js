/** Dependencies */
import styled from '@emotion/styled';

/** Style Components */
const PropertyIcons = styled .ul `
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 3rem auto 0 auto;
    max-width: 50rem;

    li {
        display: flex;

        img {
            margin-right: 1rem;
        }
    }
`;

export default PropertyIcons;