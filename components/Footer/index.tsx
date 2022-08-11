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
            &copy;&nbsp;2022 Айдар Ракимов
            <a href="mailto:aydar@rakimov.ru">aydar@rakimov.ru</a>
        </Container>
    </footer>
);
