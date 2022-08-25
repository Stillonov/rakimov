import Head from 'next/head';

import type { NextPageWithLayout } from 'pages/_app';
import { Layout } from 'components/Layout';
import { Container } from 'components/Container';
import { Breadcrumb } from 'components/Breadcrumb';
import { BreadcrumbItem } from 'components/BreadcrumbItem';

const Design: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Design" />
            </Head>

            <Container>
                <Breadcrumb>
                    <BreadcrumbItem link="/">Главная</BreadcrumbItem>
                    <BreadcrumbItem link="/design">Дизайню</BreadcrumbItem>
                    <BreadcrumbItem link="/design/chudo">Чудо</BreadcrumbItem>
                </Breadcrumb>
            </Container>
        </div>
    );
};

Design.getLayout = (page) => <Layout>{page}</Layout>;

export default Design;
