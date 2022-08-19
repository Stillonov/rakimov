import cn from 'classNames';
import styles from './styles.module.css';

interface Props {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
}

export const Button: React.FC<Props> = ({ children, className = '', fluid = false }) => (
    <button className={cn(styles.root, className, { [styles.fluid]: fluid })}>{children}</button>
);
