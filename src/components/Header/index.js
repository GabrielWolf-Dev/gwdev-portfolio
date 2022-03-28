import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

/* Components & Styles */
import styles from './style.module.css';
import Link from '../Link';

export default function Header({ linksMenu }){
    const foreignLinks = ["Medium", "Blog", "Creditos"];
    const [menuActive, setMenuActive] = useState(false);
    const route = useRouter();
    const currentPath = route.pathname;

    function handlerMenuMobile(){
        setMenuActive(!menuActive)
    }

    return(
        <header className={styles.header}>
            <Link href="/">
                <Image
                    width="42px"
                    height="42px"
                    src="/svg/logo.svg"
                    alt="Logo do site"
                />
            </Link>
            
            <nav className={styles['menu-desktop']}>
                <ul>
                    {
                        linksMenu.map((link, index) => {
                            const lowerTextLink = link.toLowerCase();

                            if(foreignLinks.indexOf(link) !== -1){
                                if("Medium" === link){
                                    return (
                                        <li className={styles['menu-desktop__links']} key={index}>
                                            <a
                                                className={styles['menu-desktop__link']}
                                                href="https://gabrielw-contato.medium.com/"
                                                target="blank"
                                            >Medium</a>
                                        </li>
                                    );
                                } else {
                                    return(
                                        <li className={styles['menu-desktop__links']} key={index}>
                                            <Link
                                                style={{
                                                    color: currentPath === `/${lowerTextLink}` ? '#00ADB5' : ''
                                                }}
                                                className={styles['menu-desktop__link']}
                                                href={`/${lowerTextLink}`}
                                            >{link}</Link>
                                        </li>
                                    );
                                }
                            } else {
                                return(
                                    <li className={styles['menu-desktop__links']} key={index}>
                                        <Link
                                            className={styles['menu-desktop__link']}
                                            href={`#${lowerTextLink}`}
                                        >{link}</Link>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </nav>

            <nav className={styles['menu-mobile']}>
                <button
                    onClick={handlerMenuMobile}
                    className={`
                        ${styles['menu-mobile__btn']}
                        ${styles[`${menuActive ? 'menu-mobile__btn--active' : ''}`]}
                    `}
                ></button>

                <ul
                    className={`
                        ${styles['menu-mobile__list-links']}
                        ${styles[`${menuActive ? 'menu-mobile__list-links--active' : ''}`]}
                    `}
                >
                    {
                        linksMenu.map((link, index) => 
                            foreignLinks.indexOf(link) !== -1 
                            ? 
                            <li className={styles['menu-mobile__links']} key={index}>
                                <Link
                                    className={styles['menu-mobile__link']}
                                    href={`/${link.toLowerCase()}`}
                                >{link}</Link>
                            </li>
                            : 
                            <li className={styles['menu-mobile__links']} key={index}>
                                <Link
                                    className={styles['menu-mobile__link']}
                                    href={`#${link.toLowerCase()}`}
                                >{link}</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}