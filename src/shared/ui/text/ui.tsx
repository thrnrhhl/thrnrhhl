import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from './styles.module.scss';

export const Text: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
    const classes = classNames(styles.text, className);
    return <p className={classes} {...props}>{children}</p>
};