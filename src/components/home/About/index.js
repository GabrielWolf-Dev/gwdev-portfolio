/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function About() {
    return(
        <section className={styles.about}>
            <div className={styles["about__content"]}>
                <h2 className={styleFonts["sub-title"]}>Um pouco da minha história</h2>
                <p className={styleSpaces["mtop-16"]}>
                Os games foram um dos principais fatores pelo meu interesse em entender toda a engenharia por trás dos computadores, principalmente desenvolvimento de software em questão. Estava no período do Ensino Médio e começei a escrever as minhas primeiras linhas de código com o curso técnico que fiz na NOVOTEC.
                </p>
                <p>
                Conforme fui avançando no curso me deparei com o desenvolvimento de websites com HTML5 e CSS3, então foi neste momento que nunca parei mais de estudar Front-End e me interessar cada vez mais nesta área que curto bastante!
                </p>
            </div>

            <img
                className={styles["about__img"]}
                src="/svg/ti-img.svg"
                alt="Profissional de TI gerenciando uma base binária em um painel"
            />
        </section>
    );
}