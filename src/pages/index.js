import React from 'react';

/** Dependencies */
import { css } from '@emotion/core';

/** Components */
import MainLayout from '../components/ui/MainLayout';

/** Hooks */
import useIndexPage from '../hooks/useIndexPage';

/** Page Component */
const IndexPage = () => {
    
    const 
        dataPage = useIndexPage(),
        { title, content, image } = dataPage[ 0 ];
    
    return (
        <MainLayout>
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
            </main>
        </MainLayout>
    )
}

export default IndexPage
