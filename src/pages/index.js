import React from 'react';

/** Components */
import MainLayout from '../components/ui/MainLayout';

/** Hooks */
import useIndexPage from '../hooks/useIndexPage';

/** Page Component */
const IndexPage = () => {
    
    useIndexPage();
    
    return (
        <MainLayout>
            <h1>Index</h1>
        </MainLayout>
    )
}

export default IndexPage
