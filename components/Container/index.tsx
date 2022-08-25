import cn from 'classNames';
import styles from './styles.module.css';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', fluid = false }) => (
    <div className={cn(styles.root, className, { [styles.fluid]: fluid })}>{children}</div>
);
