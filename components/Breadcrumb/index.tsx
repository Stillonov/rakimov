import React from 'react';
import cn from 'classNames';

import type { BreadcrumbItemProps } from 'components/BreadcrumbItem';

import styles from './styles.module.css';

interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className }) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <nav className={cn(styles.root, className)} aria-label="Breadcrumb">
            <ul className={styles.list}>
                {React.Children.map(childrenArray, (child, index) => {
                    const isLast = index === childrenArray.length - 1;

                    if (!React.isValidElement<BreadcrumbItemProps>(child)) {
                        return child;
                    }

                    return React.cloneElement<BreadcrumbItemProps>(child, { link: child.props.link, isLast });
                })}
            </ul>
        </nav>
    );
};
