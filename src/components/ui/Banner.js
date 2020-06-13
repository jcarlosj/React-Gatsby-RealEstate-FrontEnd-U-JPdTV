import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Style Modules */
import indexStyle from '../../css/modules/index.module.css';

/** Dependencies */
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

/** Style Components */
const Background = styled( BackgroundImage ) `
    height: 60rem;
`;

/** Component */
const Banner = () => {

    /** GraphQL Query */
    const { image } = useStaticQuery( graphql `
        query {
            image: file ( relativePath: { eq: "encuentra.jpg" } ) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1200 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    console .log( 'Banner', image );

    const { sharp: { fluid } } = image;

    return( 
        <Background
            tag="section"
            fluid={ fluid }
            fadeIn="soft"
        >
            <div className={ indexStyle .bgImg }>
                <h2 className={ indexStyle .title }>Encuentra el hogar de tus sueños</h2>
                <p>Con 15 años de experiencia en el sector</p>
            </div>
        </Background>
    );
}

export default Banner;