import { useState } from 'react';

import styles from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function LastAct({ gitActs }) {
    const [isCopyied, setIsCopyied] = useState(false);

    async function copyUrl(event) {
        const btn = event.target.closest("#btn-clone");
        const clone_url = btn.dataset.url;

        await navigator.clipboard.writeText(clone_url);
        setIsCopyied(true);

        setTimeout(() => setIsCopyied(false), 1500);
    }

    return(
        <section className="container">
            <h2
                className={`${styleFonts.title} ${styleFonts["text-center"]} ${styleSpaces["mbottom-32"]}`}
            >Últimas atividades(GitHub)</h2>

            <div className='flex'>
                {
                    gitActs.map(act => (
                        <aside
                            key={act.id}
                            className={styles["last-act"]}
                        >
                            <h3 className={styleFonts["text-green"]}>{act.name}</h3>
                        
                            <div className={`${styles["last-act__desc-box"]} ${styleSpaces["my-8"]}`}>
                                <p className={`${styleFonts["text-white"]}`}>{act.desc}.</p>
                                <p className={styleFonts["text-white"]}><strong>Principal tech:</strong> {act.tech}.</p>
                            </div>
                        
                            <span className={`${styles["last-act__date"]} ${styleFonts["text-green"]}`}>Criado em {act.created_at}</span>
                        
                            <button
                                data-url={act.clone_url}
                                onClick={copyUrl} 
                                className={styles["last-act__btn-clone"]}
                                id="btn-clone"
                            >
                                <FontAwesomeIcon icon={faClone} />
                            </button>
                            <a
                                target="_blank"
                                href={act.repo_url}
                                className={styles["last-act__btn-repo"]}
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </aside>
                    ))
                }
            </div>

            <div
                className={isCopyied 
                    ? `${styles["copy-msg"]} ${styles["copy-msg--active"]}` 
                    : styles["copy-msg"]}
            >Copiado com sucesso!</div>
        </section>
    );
}