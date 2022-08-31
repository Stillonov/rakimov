import cn from 'classNames';

import { ProjectCard } from 'components/ProjectCard';
import styles from './styles.module.css';

interface ProjectCardGroupProps {
    data: ProjectCard[];
    className?: string;
}

export const ProjectCardGroup: React.FC<ProjectCardGroupProps> = ({ data, className }) => (
    <div className={cn(styles.root, className)}>
        {data.map((item) => (
            <ProjectCard key={item.id} data={item} />
        ))}
    </div>
);
