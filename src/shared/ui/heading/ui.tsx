import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { FC } from "react";
import styles from './styles.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: FC<HeadingProps> = ({ as = "h1", className, children, ...props }) => {
    const classes = classNames(styles.heading, {
        [styles.heading__h1]: as === 'h1',
        [styles.heading__h2]: as === 'h2'
    }, className);

    return React.createElement(as, { className: classes, ...props }, children);
};