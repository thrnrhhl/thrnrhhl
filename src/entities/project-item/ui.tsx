import { Text } from "@/shared/ui";
import { FC } from "react";
import styles from './styles.module.scss';

interface ProjectItemProps {
    img: string;
    name: string;
    description: string;
};

export const ProjectItem: FC<ProjectItemProps> = ({ img, name, description }) => {
    return (
        <div className={styles.project_item}>
            <img src={img} alt="karnast" className={styles.project_item__img} />
            <div>
                <Text className={styles.project_item__text__mb_10}>{name}</Text>
                <Text>{description}</Text>
            </div>
        </div>
    );
};