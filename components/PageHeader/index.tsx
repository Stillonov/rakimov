import cn from 'classNames';
import styles from './styles.module.css';

interface PageHeaderProps {
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    className?: string;
    compact?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ leftSlot, rightSlot, className, compact = false }) => {
    return (
        <div className={cn(styles.root, { [styles.compact]: compact }, className)}>
            {leftSlot && <div className={styles.gridColumn}>{leftSlot}</div>}

            {rightSlot && <div className={styles.gridColumn}>{rightSlot}</div>}
        </div>
    );
};
