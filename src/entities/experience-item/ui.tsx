import { LeftBorder, Text } from "@/shared/ui";
import classNames from "classnames";
import { FC } from "react";
import styles from './styles.module.scss';

interface ExperienceItemProps {
    company: string;
    city: string;
    position: string;
    date: string;
    description: string;
};

export const ExperienceItem: FC<ExperienceItemProps> = ({ company, city, position, date, description }) => {

    return (
        <LeftBorder className={styles.experience_item}>
            <Text>{company}</Text>
            <Text>{city}</Text>
            <Text>{position}</Text>
            <Text>{date}</Text>
            <Text className={classNames(styles.experience_item__description)}>{description}</Text>
        </LeftBorder>
    );
};