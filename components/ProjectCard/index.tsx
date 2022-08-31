import Link from 'next/link';

import styles from './styles.module.css';

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
                <h2 className={styles.title}>{data.name}</h2>
                <div className={styles.description}>{data.description}</div>
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
