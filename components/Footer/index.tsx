import styles from './styles.module.css';

interface Props {
    data?: string;
};

export const Footer: React.FC<Props> = () => {
    return (
        <footer className={styles.root}>
            Page Footer
        </footer>
    );
};
