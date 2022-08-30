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
import { ProjectsList } from 'components/ProjectsList';

const DATA_PROJECTS = [
    { id: 0, name: 'Item 1', description: 'The cool item' },
    { id: 1, name: 'Item 2', description: 'The bad item' },
    { id: 1, name: 'Item 3', description: 'The nice item', works: [{ name: 'Work 1', url: '/' }] },
];

const Design: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Design" />
                <meta name="theme-color" content="#131315" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#131315" media="(prefers-color-scheme: dark)" />
            </Head>

            <Container>
                <PageHeader
                    leftSlot={
                        <>
                            <Breadcrumb>
                                <BreadcrumbItem link="/">Главная</BreadcrumbItem>
                                <BreadcrumbItem link="/design">Дизайню</BreadcrumbItem>
                            </Breadcrumb>

                            <Title>Дизайню</Title>
                            <Subtitle>Здесь проекты, для которых я делал дизайн</Subtitle>
                        </>
                    }
                    rightSlot={<Meta data={['2015 - 2022 гг', 'Проектов: 18', 'Работ: 46']} />}
                />

                <ProjectsList data={DATA_PROJECTS} />
            </Container>
        </>
    );
};

Design.getLayout = (page) => <Layout backgroundImageUrl={backgroundImage.src}>{page}</Layout>;

export default Design;
