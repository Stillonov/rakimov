import styles from './styles.module.css';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<Props> = ({ children, className = '' }) => (
    <div className={`${styles.root} ${className}`}>{children}</div>
);
