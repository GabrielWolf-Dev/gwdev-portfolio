import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';

/* Components & Styles */
import styleHome from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function MainProjects({ mainProjects }) {
    return(
        <section className={styleHome["main-project"]}>
            <h2 className={styleFonts.title}>Principais projetos</h2>
            <p
                className={`
                    ${styleFonts.paragraph} 
                    ${styleFonts["text-white"]} 
                    ${styleSpaces["my-16"]}
                `}
            >
                Aqui estão os projetos mais recentes:
            </p>
            
            <div className={styleHome["main-project__container"]}>
                {
                    mainProjects.map(project => (
                        <aside key={project.id} className={styleHome["main-project__project"]}>
                            <h3 className={`${styleFonts["text-green"]}`}>{project.nameProject}</h3>
                            <div className={`${styleHome["main-project__box-content"]} ${styleSpaces["my-8"]}`}>
                                <p className={`${styleFonts["text-white"]}`}>{project.description}</p>
                            </div>
                        
                            <a target="_blank" rel="noreferrer" href={project.urlRepo} className={styleHome["main-project__repo-link"]}>
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        
                            <a target="_blank" rel="noreferrer" href={project.urlProject} className={styleHome["main-project__project-link"]}>
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </aside>
                    ))
                }
            </div>
        </section>
    );
}