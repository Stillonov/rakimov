import Head from 'next/head';

import type { NextPageWithLayout } from 'pages/_app';
import { Layout } from 'components/Layout';
import { Container } from 'components/Container';

const Design: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Design" />
            </Head>

            <Container>
                Design
            </Container>
        </div>
    );
};

Design.getLayout = (page) => <Layout>{page}</Layout>;

export default Design;
