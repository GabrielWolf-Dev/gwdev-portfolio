import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* Components & Styles */
import styleHome from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';


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
        <section className="container" id="projetos">
            <h2
                className={`${styleFonts.title} ${styleFonts["text-center"]} ${styleSpaces["mbottom-32"]}`}
            >Últimas atividades(GitHub)</h2>

            <div className='flex'>
                {
                    gitActs.map(act => (
                        <aside
                            key={act.id}
                            className={styleHome["last-act"]}
                        >
                            <h3 className={styleFonts["text-green"]}>{act.name}</h3>
                        
                            <div className={`${styleHome["last-act__desc-box"]} ${styleSpaces["my-8"]}`}>
                                <p className={`${styleFonts["text-white"]}`}>{act.desc}.</p>
                                <p className={styleFonts["text-white"]}><strong>Principal tech:</strong> {act.tech}.</p>
                            </div>
                        
                            <span className={`${styleHome["last-act__date"]} ${styleFonts["text-green"]}`}>Criado em {act.created_at}</span>
                        
                            <button
                                data-url={act.clone_url}
                                onClick={copyUrl} 
                                className={styleHome["last-act__btn-clone"]}
                                id="btn-clone"
                            >
                                <FontAwesomeIcon icon={faClone} />
                            </button>
                            <a
                                target="_blank"
                                href={act.repo_url}
                                className={styleHome["last-act__btn-repo"]}
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
                    ? `${styleHome["copy-msg"]} ${styleHome["copy-msg--active"]}` 
                    : styleHome["copy-msg"]}
            >Copiado com sucesso!</div>
        </section>
    );
}