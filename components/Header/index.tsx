import { Container } from 'components/Container';

import styles from './styles.module.css';

interface Props {
    data?: string;
}

export const Header: React.FC<Props> = () => (
    <header className={styles.root}>
        <Container>Page Header</Container>
    </header>
);
