import cn from 'classNames';
import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    level?: string;
}

export const Title: React.FC<ButtonProps> = ({ children, className = '', level = '1' }) => {
    const CustomElement = `h${level}` as React.ComponentType | keyof JSX.IntrinsicElements;

    return <CustomElement className={cn(styles.root, [styles[`level${level}`]], className)}>{children}</CustomElement>
};
