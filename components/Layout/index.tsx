import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './styles.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div className={styles.root}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
);
