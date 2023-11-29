import Image from "next/image";
import styles from './styles.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Image src="/logo_black.svg" alt="me" width="118" height="96" className={styles.header__logo_black} />
                <Image src="/logo_white.svg" alt="me" width="118" height="96" className={styles.header__logo_white} />
            </div>
            <Image src="/me.png" alt="me" width="208" height="404" className={styles.header__me} />
            <div className={styles.header__wrapper_gif}>
                <Image src="/pepa_v_ahue.gif" alt="me" width="128" height="128" className={styles.header__gif} />
            </div>
        </div>
    );
};