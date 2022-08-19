import { Container } from 'components/Container';

import styles from './styles.module.css';

interface Props {
    data?: string;
}

export const Header: React.FC<Props> = () => (
    <header className={styles.root}>
        <Container>
            <div className={styles.gridContainer}>
                <div className={styles.gridColumn}>Айдар Ракимов</div>
                <div className={styles.gridColumn}>Продуктовый дизайнер. UX/UI</div>
                <div className={styles.gridColumn}>Скачать резюме</div>
            </div>
        </Container>
    </header>
);
