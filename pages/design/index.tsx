import Head from 'next/head';

import type { NextPageWithLayout } from 'pages/_app';
import { Layout } from 'components/Layout';
import { Container } from 'components/Container';
import { Breadcrumb } from 'components/Breadcrumb';
import { BreadcrumbItem } from 'components/BreadcrumbItem';
import { Title } from 'components/Title';
import { PageHeader } from 'components/PageHeader';
import { Subtitle } from 'components/Subtitle';
import { Meta } from 'components/Meta';
import backgroundImage from 'public/images/background-design.png';

const Design: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Design" />
            </Head>

            <Container>
                <PageHeader
                    leftSlot={
                        <>
                            <Breadcrumb>
                                <BreadcrumbItem link="/">Главная</BreadcrumbItem>
                                <BreadcrumbItem link="/design">Дизайню</BreadcrumbItem>
                                <BreadcrumbItem link="/design/chudo">Чудо</BreadcrumbItem>
                            </Breadcrumb>

                            <Title>Дизайню</Title>
                            <Subtitle>Здесь проекты, для которых я делал дизайн</Subtitle>
                        </>
                    }
                    rightSlot={<Meta data={['2015 - 2022 гг', 'Проектов: 18', 'Работ: 46']} />}
                />
            </Container>
        </>
    );
};

Design.getLayout = (page) => <Layout backgroundImage={backgroundImage.src}>{page}</Layout>;

export default Design;
