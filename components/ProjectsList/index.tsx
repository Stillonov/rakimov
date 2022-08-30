import cn from 'classNames';

import { ProjectsListItem, ProjectsListItemComp } from 'components/ProjectsListItem';
import styles from './styles.module.css';

interface ProjectsListProps {
    data: ProjectsListItem[];
    className?: string;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ data, className }) => {
    return (
        <div className={cn(styles.root, className)}>
            {data.map((item) => (
                <ProjectsListItemComp key={item.id} data={item} />
            ))}
        </div>
    );
};
