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
import { ProjectCardGroup } from 'components/ProjectCardGroup';
import backgroundImage from 'public/images/background-design.webp';

const DATA_PROJECTS = [
    {
        id: 0,
        name: 'Item 1',
        description: 'The cool item',
        url: '/design/project',
        works: [{ name: 'Логотип', url: '/design/project/work' }],
    },
    { id: 1, name: 'Item 2', description: 'The bad item', url: '/design/project' },
    {
        id: 2,
        name: 'Item 3',
        description: 'The nice item',
        url: '/design/project',
        works: [
            { name: 'Логотип', url: '/design/project/work' },
            { name: 'Мобильное приложение', url: '/design/project/work' },
            { name: 'Лендинг проекта', url: '/design/project/work' },
        ],
    },
    { id: 3, name: 'Item 4', description: 'The bad item', url: '/design/project' },
    { id: 4, name: 'Item 5', description: 'The cool item', url: '/design/project' },
];

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
                            </Breadcrumb>

                            <Title>Дизайню</Title>
                            <Subtitle>Здесь проекты, для которых я делал дизайн</Subtitle>
                        </>
                    }
                    rightSlot={<Meta data={['2015 - 2022 гг', 'Проектов: 18', 'Работ: 46']} />}
                />

                <ProjectCardGroup data={DATA_PROJECTS} />
            </Container>
        </>
    );
};

Design.getLayout = (page) => <Layout backgroundImageUrl={backgroundImage.src}>{page}</Layout>;

export default Design;
