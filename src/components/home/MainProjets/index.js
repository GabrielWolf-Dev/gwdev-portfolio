import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';

import styles from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function MainProjects({ mainProjects }) {
    return(
        <section className={styles["main-project"]}>
            <h2 className={styleFonts.title}>Princais projetos</h2>
            <p
                className={`
                    ${styleFonts.paragraph} 
                    ${styleFonts["text-white"]} 
                    ${styleSpaces["my-16"]}
                `}
            >
                Aqui estão os principais projetos atuais:
            </p>
            
            <div className={styles["main-project__container"]}>
                {
                    mainProjects.map(project => (
                        <aside key={project.id} className={styles["main-project__project"]}>
                            <h3 className={`${styleFonts["text-green"]}`}>{project.nameProject}</h3>
                            <div className={`${styles["main-project__box-content"]} ${styleSpaces["my-8"]}`}>
                                <p className={`${styleFonts["text-white"]}`}>{project.description}</p>
                            </div>
                        
                            <a target="_blank" rel="noreferrer" href={project.urlRepo} className={styles["main-project__repo-link"]}>
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        
                            <a target="_blank" rel="noreferrer" href={project.urlProject} className={styles["main-project__project-link"]}>
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </aside>
                    ))
                }
            </div>
        </section>
    );
}