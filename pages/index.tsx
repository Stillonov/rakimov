import Head from 'next/head';

import type { NextPageWithLayout } from 'pages/_app';

import styles from 'styles/pages/Home.module.css';

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>rakimov.ru</title>
                <meta name="description" content="Home page" />
            </Head>
            Home page
        </div>
    );
};

export default Home;
