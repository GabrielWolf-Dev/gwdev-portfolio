import { Player } from '@lottiefiles/react-lottie-player';

/* Components & Styles */
import styles from '../../../../styles/blog.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function Banner(){
    return(
        <section className={styles.banner}>
            <div className={styles["banner__desc"]}>
                <h1
                    className={`
                        ${styleFonts["title"]}
                        ${styleFonts["text-green"]}
                    `}
                >Blog Carreira Tech</h1>
                <p
                    className={`
                        ${styleSpaces["mtop-16"]}
                        ${styleFonts["paragraph"]}
                        ${styleFonts["text-white"]}
                    `}
                >
                    Este blog é destinado a posts falando sobre carreira tech e curiosidades que eu acho na área, além de algumas dicas. A parte mais técnica focada no Front estará no Medium.
                </p>
            </div>

            <div className={styles["banner__img"]}>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_ecsh092g.json"
                    style={{ height: '100%', width: '100%', padding: "16%" }}   
                />
            </div>
        </section>
    );
}