import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from './styles.module.scss';

interface ContactLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    source: string;
    type: "1" | "2" | "3" | "4";
}

export const ContactLink: FC<ContactLinkProps> = ({ children, className, source, type, ...props }) => {
    const classes = classNames(styles.contact_link, {
        [styles.contact_link__type__1]: type === '1',
        [styles.contact_link__type__2]: type === '2',
        [styles.contact_link__type__3]: type === '3',
        [styles.contact_link__type__4]: type === '4',
    })

    return (
        <a href={source} target="_blank" className={classes} {...props}>
            {children}
        </a>
    );
};