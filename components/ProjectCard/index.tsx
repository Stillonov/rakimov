import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';
import { IconRightArrow } from 'components/Icons/IconRightArrow';

export interface WorksListItem {
    name: string;
    url: string;
}

export interface ProjectCard {
    id: number;
    name: string;
    description: string;
    works?: WorksListItem[];
}

interface ProjectCardProps {
    data: ProjectCard;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => (
    <div className={styles.root}>
        <Link href="/">
            <a className={styles.project}>
                <IconRightArrow className={styles.icon} />
                <h2 className={styles.title}>{data.name}</h2>
                <span className={styles.description}>{data.description}</span>
            </a>
        </Link>

        {data.works && (
            <ol className={styles.worksList}>
                {data.works.map(({ name }, index) => (
                    <li key={index} className={styles.worksListItem}>
                        <Link href="/">
                            <a>{name}</a>
                        </Link>
                    </li>
                ))}
            </ol>
        )}
    </div>
);
