import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './styles.module.css';

interface LayoutProps {
    children: React.ReactNode;
    backgroundImage?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, backgroundImage }) => (
    <div className={styles.root}>
        <Header />
        <main
            className={styles.main}
            {...(backgroundImage ? { style: { backgroundImage: `url(${backgroundImage})` } } : {})}
        >
            {children}
        </main>
        <Footer />
    </div>
);
