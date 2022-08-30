import cn from 'classNames';
import Link from 'next/link';

import styles from './styles.module.css';

export interface BreadcrumbItemProps {
    children: React.ReactNode;
    link?: string;
    isLast?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, link = '/', isLast = false }) => (
    <li className={cn(styles.root, { [styles.isLast]: isLast })} {...(isLast ? { 'aria-current': 'page' } : {})}>
        <Link href={link}>
            <a>{children}</a>
        </Link>
    </li>
);
