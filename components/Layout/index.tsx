import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './styles.module.css';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
    <div className={styles.root}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
);
