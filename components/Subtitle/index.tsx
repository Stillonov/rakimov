import cn from 'classNames';

import styles from './styles.module.css';

interface SubtitleProps {
    children: React.ReactNode;
    className?: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => (
    <div className={cn(styles.root, className)}>{children}</div>
);
