import styles from './styles.module.css';

export interface WorksListItem {
    name: string;
    url: string;
}

export interface ProjectsListItem {
    id: number;
    name: string;
    description: string;
    works?: WorksListItem[];
}

interface ProjectsListItemProps {
    data: ProjectsListItem;
}

export const ProjectsListItemComp: React.FC<ProjectsListItemProps> = ({ data }) => (
    <div className={styles.root}>
        <div>{data.name}</div>
        <div>{data.description}</div>
        {data.works && data.works.map(({ name }) => <div>{name}</div>)}
    </div>
);
