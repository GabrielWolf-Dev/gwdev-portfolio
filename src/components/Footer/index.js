/* eslint-disable @next/next/no-img-element */

/* Components & Styles */
import Link from '../Link';
import styles from './style.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Link href="/">
                <img
                    src="/svg/logo.svg"
                    alt="Logo do site"
                />
            </Link>

            <ul>
                <li className={styles["footer__link-item"]}>
                    <a
                        className={styles["footer__link"]}
                        target="blank"
                        rel="noreferrer"
                        href="https://gabrielw-contato.medium.com/"
                    >Medium</a>
                </li>
                <li className={styles["footer__link-item"]}>
                    <Link className={styles["footer__link"]} href="/blog">Blog</Link>
                </li>
                <li className={styles["footer__link-item"]}>
                    <Link className={styles["footer__link"]} href="/creditos">Creditos</Link>
                </li>
            </ul>
        </footer>
    );
}