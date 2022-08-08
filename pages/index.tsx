import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

const Home: NextPage = () => {
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
