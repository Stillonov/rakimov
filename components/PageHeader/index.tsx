import cn from 'classNames';
import styles from './styles.module.css';

interface PageHeaderProps {
    compact?: boolean;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ leftSlot, rightSlot, compact = false, className = '' }) => {
    return (
        <div className={cn(styles.root, { [styles.compact]: compact }, className)}>
            {leftSlot && <div className={styles.gridColumn}>{leftSlot}</div>}

            {rightSlot && <div className={styles.gridColumn}>{rightSlot}</div>}
        </div>
    );
};
