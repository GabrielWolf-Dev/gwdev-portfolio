import Link from "next/link";
import Image from 'next/image';

export default function Header({ linksMenu }){
    const foreignLinks = ["Medium", "Blog", "Home", "Creditos"];

    return(
        <header>
            <Image
                width="42px"
                height="42px"
                src="/svg/logo.svg"
                alt="Logo do site"
            />
            
            <ul>
                {
                    linksMenu.map((link, index) => 
                        foreignLinks.indexOf(link) !== -1 
                        ? <li key={index}><Link href={`/${link.toLowerCase()}`} passHref>{link}</Link></li>
                        : <li key={index}><Link href={`#${link.toLowerCase()}`} passHref>{link}</Link></li>
                    )
                }
            </ul>
        </header>
    );
}