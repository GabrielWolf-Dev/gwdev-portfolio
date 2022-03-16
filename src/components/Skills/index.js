import styles from '../../../styles/home.module.css';
import styleFonts from '../../../styles/fonts.module.css';

export default function Skills({ experience }) {
    const { created_at, updated_at } = experience;
    const createdDateAccount = new Date(created_at).getFullYear();
    const currentDateAccount = new Date(updated_at).getFullYear();
    const currentExp = currentDateAccount - createdDateAccount;

    return(
        <section className={styles.skills}>
            <div className={`container`}>
                <h2 className={styleFonts["sub-title"]}>Habilidades</h2>
                <p>
                Com {currentExp} anos de experiência a partir de estudos, trabalhos e projetos, desenvolvo websites escaláveis, com performance, acessíveis e com padrões de projeto.
                </p>
            </div>
        </section>  
    );
}