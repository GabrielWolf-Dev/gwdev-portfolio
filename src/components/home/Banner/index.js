import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import styles from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpace from '../../../../styles/spaces.module.css';

export default function Banner({ gitHubDatas }) {
    const mailTo = "gabrielw.contato@gmail.com";
    const words = [
        gitHubDatas.name,
        "Front-End",
        "Engenharia de Software",
        "UI/UX Design",
        "JavaScript 🧑‍💻"
    ];

    return(
        <section className={styles.banner}>
            <main className={styles["banner-container"]}>
                <Image
                    width="280px"
                    height="280px"
                    className={styles["banner__img"]}
                    src={gitHubDatas.avatar_url}
                    alt={`Foto de ${gitHubDatas.name}`}
                />

                <div className={styles["banner__content"]}>
                    <h1 className={styleFonts.title}>
                        <Typewriter
                            words={words}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className={`${styleFonts.paragraph} ${styleFonts["text-white"]} ${styleSpace["my-18"]}`}>{gitHubDatas.bio}</p>

                    <div>
                        <a href="https://www.linkedin.com/in/gabriel-wolf-frontend/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles["banner__content__icons"]} icon={faLinkedinIn} />
                        </a>
                        <a href={`mailto:${mailTo}`} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles["banner__content__icons"]} icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/GabrielWolf-Dev" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles["banner__content__icons"]} icon={faGithubAlt} />
                        </a>
                    </div>
                </div>
            </main>
        </section>
    );
}