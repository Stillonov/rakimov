import cn from 'classNames';
import Link from 'next/link';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export const Breadcrumbs: React.FC<Props> = ({ className = '' }) => {
    return (
        <nav className={cn(styles.root, className)} aria-label="Breadcrumbs">
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/">
                        <a>Уровень 1</a>
                    </Link>
                </li>

                <li className={styles.listItem}>
                    <Link href="/">
                        <a>Уровень 2</a>
                    </Link>
                </li>

                <li className={styles.listItem}>
                    <Link href="/">
                        <a aria-current="page">Уровень 3</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
