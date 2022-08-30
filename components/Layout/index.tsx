import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './styles.module.css';
import noiseImage from 'public/images/noise.png';

interface LayoutProps {
    children: React.ReactNode;
    backgroundImageUrl?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, backgroundImageUrl }) => {
    const backgroundImage = `url(${noiseImage.src}), linear-gradient(180deg, rgba(19, 19, 21, 0) 50%, #131315 100%), url(${backgroundImageUrl})`;

    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>
                {backgroundImageUrl && <div className={styles.backgroundImage} style={{ backgroundImage }} />}
                {children}
            </main>
            <Footer />
        </div>
    );
};
