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

const Project: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Project" />
            </Head>

            <Container>
                <PageHeader
                    compact
                    leftSlot={
                        <>
                            <Breadcrumb>
                                <BreadcrumbItem link="/">Главная</BreadcrumbItem>
                                <BreadcrumbItem link="/design">Дизайню</BreadcrumbItem>
                                <BreadcrumbItem link="/design/project">Project</BreadcrumbItem>
                            </Breadcrumb>

                            <Title>Project</Title>
                            <Subtitle>Project description</Subtitle>
                        </>
                    }
                    rightSlot={<Meta data={['2015 - 2022 гг']} />}
                />

                PROJECT!
            </Container>
        </>
    );
};

Project.getLayout = (page) => <Layout>{page}</Layout>;

export default Project;
