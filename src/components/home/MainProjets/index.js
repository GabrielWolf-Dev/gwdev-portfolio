import styles from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpace from '../../../../styles/spaces.module.css';

export default function MainProjects({ mainProjects }) {
    return(
        <section className={styles["main-project"]}>
            <h2 className={styleFonts.title}>Princais projetos</h2>
            <p
                className={`
                    ${styleFonts.paragraph} 
                    ${styleFonts["text-white"]} 
                    ${styleSpace["my-16"]}
                `}
            >
                Aqui estão os principais projetos atuais:
            </p>
            
            Consumindo os dados(teste)
            {
                mainProjects.map(({ id, nameProject, description, urlRepo, urlProject }) => (
                    <div key={id}>
                        Nome: {nameProject}
                        <br />
                        Descrição: {description}
                        <br />
                        urlRepo: {urlRepo}
                        <br />
                        urlProject: {urlProject}
                        <br />
                    </div>
                ))
            }
        </section>
    );
}