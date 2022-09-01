import cn from 'classNames';
import styles from './styles.module.css';

interface IconSvgProps {
    children: React.ReactNode;
    className?: string;
}

export const IconSvg: React.FC<IconSvgProps> = ({ children, className }) => (
    <svg
        className={cn(styles.root, className)}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        focusable="false"
        aria-hidden="true"
    >
        {children}
    </svg>
);
