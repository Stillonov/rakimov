import styles from './styles.module.css';

interface Props {
    data?: string;
};

export const Footer: React.FC<Props> = () => (
    <footer className={styles.root}>
        Page Footer
    </footer>
);
