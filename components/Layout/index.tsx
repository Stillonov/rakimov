import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './styles.module.css';

interface LayoutProps {
    children: React.ReactNode;
    backgroundImageUrl?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, backgroundImageUrl }) => {
    const backgroundImage = `linear-gradient(180deg, rgba(19, 19, 21, 0.87) 0%, #131315 100%), url(${backgroundImageUrl})`;

    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main} {...(backgroundImage ? { style: { backgroundImage } } : {})}>
                {children}
            </main>
            <Footer />
        </div>
    );
};
