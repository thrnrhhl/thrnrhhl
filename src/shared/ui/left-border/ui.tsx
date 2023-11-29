import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from './styles.module.scss';

export const LeftBorder: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
    return (
        <div className={classNames(styles.left_border, className)} {...props}>
            {children}
        </div>
    );
};