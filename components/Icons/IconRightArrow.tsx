import { IconSvg } from './IconSvg';

interface IconRightArrowProps {
    className?: string;
}

export const IconRightArrow: React.FC<IconRightArrowProps> = ({ className }) => (
    <IconSvg className={className}>
        <path d="M6 0L12 6L6 12L5.33224 11.3322L10.1923 6.47218H0V5.52782H10.1923L5.33224 0.667759L6 0Z" />
    </IconSvg>
);
