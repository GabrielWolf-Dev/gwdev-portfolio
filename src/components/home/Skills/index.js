/* eslint-disable @next/next/no-img-element */

/* Components & Styles */
import styleHome from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function Skills({ experience, mainTechIcons, basicTechIcons }) {
    const { created_at, updated_at } = experience;
    const createdDateAccount = new Date(created_at).getFullYear();
    const currentDateAccount = new Date(updated_at).getFullYear();
    const currentExp = currentDateAccount - createdDateAccount;

    return(
        <section className={styleHome.skills}>
            <div className={`container`}>
                <h2 className={styleFonts["sub-title"]}>Habilidades</h2>
                <p className={styleSpaces["my-24"]}>
                    Com {currentExp} anos de experiência a partir de estudos, trabalhos e projetos, desenvolvo websites escaláveis, com performance, acessíveis e com padrões de projeto.
                </p>

                {
                    mainTechIcons.map(({ id, nameLogoMain, logoImgMain }) => 
                        <img
                            className={styleHome["skills__imgs"]}
                            key={id} src={logoImgMain.url}
                            alt={nameLogoMain}
                        />)
                }

                <h2 className={`${styleFonts["sub-title"]} ${styleSpaces["my-24"]}`}>Tenho conhecimento também:</h2>
                {
                    basicTechIcons.map(({ id, nameLogoBasic, logoImgBasic }) =>
                        logoImgBasic !== null 
                        ? <img
                            className={styleHome["skills__imgs"]}
                            key={id}
                            src={logoImgBasic.url}
                            alt={nameLogoBasic}
                        /> 
                        : false)
                }
            </div>
        </section>  
    );
}