import React from 'react';

/** Style Modules */
import indexStyle from '../css/index.module.css';

/** Dependencies */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

/** Components */
import MainLayout from '../components/layout/MainLayout';
import Banner from '../components/ui/Banner';

/** Hooks */
import useIndexPage from '../hooks/useIndexPage';

/** Style Components */
const Background = styled( BackgroundImage ) `
    height: 60rem;
`;

/** Page Component */
const IndexPage = () => {
    
    const 
        dataPage = useIndexPage(),
        { title, content, image } = dataPage[ 0 ],
        { sharp: { fluid } } = image;
    
    return (
        <MainLayout>
            <Background
                tag="section"
                fluid={ fluid }
                fadeIn="soft"
            >
                <div className={ indexStyle .bgImg }>
                    <h1 className={ indexStyle .title }>Venta y alquiler de casas y apartamentos exclusivos</h1>
                </div>
            </Background>
            <main>
                <div css={ css `
                    margin: 0 auto;
                    width: 80rem;
                `}>
                    <h1>{ title }</h1>
                    <p css={ css `
                        text-align: center;
                    `}>{ content }</p>
                </div>
                <Banner />
            </main>
        </MainLayout>
    )
}

export default IndexPage;
