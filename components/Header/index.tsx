import styles from './styles.module.css';

interface Props {
    data?: string;
};

export const Header: React.FC<Props> = () => {
    return (
        <header className={styles.root}>
            Page Header
        </header>
    );
};
