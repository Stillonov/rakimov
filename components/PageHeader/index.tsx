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
            {leftSlot && <div className={styles.leftSlot}>{leftSlot}</div>}

            {rightSlot && <div className={styles.rightSlot}>{rightSlot}</div>}
        </div>
    );
};
