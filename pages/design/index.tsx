import Head from 'next/head';

import type { NextPageWithLayout } from 'pages/_app';
import { Layout } from 'components/Layout';

const Design: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Design" />
            </Head>
            Design
        </div>
    );
};

Design.getLayout = (page) => <Layout>{page}</Layout>;

export default Design;
