import { Container } from 'components/Container';
import { Divider } from 'components/Divider';

import styles from './styles.module.css';

interface Props {
    data?: string;
}

export const Footer: React.FC<Props> = () => (
    <footer className={styles.root}>
        <Container>
            <Divider />

            <div className={styles.gridContainer}>
                <div className={styles.gridColumn}>
                    &copy;&nbsp;2022 Айдар Ракимов
                </div>

                <div className={styles.gridColumn}>
                    <a href="mailto:aydar@rakimov.ru">aydar@rakimov.ru</a>
                </div>
            </div>
        </Container>
    </footer>
);
