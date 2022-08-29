import cn from 'classNames';

import styles from './styles.module.css';

interface MetaProps {
    data: string | string[];
    className?: string;
}

export const Meta: React.FC<MetaProps> = ({ data, className }) => (
    <div className={cn(styles.root, className)}>
        <ul className={styles.list}>
            {Array.isArray(data) ? (
                data.map((text, index) => (
                    <li className={styles.listItem} key={index}>
                        {text}
                    </li>
                ))
            ) : (
                <li className={styles.listItem}>{data}</li>
            )}
        </ul>
    </div>
);
