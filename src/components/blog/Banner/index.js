/* eslint-disable @next/next/no-img-element */
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* Components & Styles */
import styles from '../../../../styles/blog.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';
import Link from '../../Link';

export default function Banner({ postsList }){
    return(
        <div className={`${styles["container-blog"]}`}>
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

            <hr className={styles["line"]} />

            <main className={styles["posts-container"]}>
                <h2
                className={`
                    ${styleFonts.title}
                    ${styleFonts["text-green"]}
                    ${styleSpaces["mbottom-32"]}
                `}>Últimos posts:</h2>

                {
                    postsList.map(post => {
                        const arrCategories = post.categories.split(",");

                        return (
                            <aside key={post.id} className={styles["posts-container__post"]}>
                                <div className={styles["post__box-content"]}>
                                    <h3
                                        className={`
                                            ${styleFonts["sub-title"]}
                                            ${styleFonts["text-green"]}
                                        `}
                                    >{post.title}</h3>
                                    <p 
                                        className={`
                                            ${styleFonts["paragraph"]}
                                            ${styleFonts["text-white"]}
                                            ${styleSpaces["my-8"]}
                                        `}
                                    >
                                        {post.content1.substr(0, 100) + "..."}
                                    </p>
                                    {arrCategories.map((category, index) =>
                                        <div
                                            key={index}
                                            className={styles["post__tags"]}
                                        >{category}</div>
                                    )}
                                </div>
                            
                                <div className={styles["post__box-img"]}>
                                    <img
                                        className={styles["post__img"]}
                                        src={post.imgPost.url}
                                        alt={post.imgPost.alt}
                                    />
                            
                                    <Link
                                        className={`
                                            ${styles["post__box-img__link-post"]}
                                            ${styles["link-post-desktop"]}
                                        `}
                                        href={`/posts/${post.slugPost}`}
                                    >
                                        <FontAwesomeIcon
                                            className={styles["post__box-img__icon-link"]}
                                            icon={faArrowRight}
                                        />
                                    </Link>
                                    <Link
                                        className={`
                                            ${styles["post__box-img__link-post"]}
                                            ${styles["link-post-mobile"]}
                                        `}
                                        href={`/posts/${post.slugPost}`}
                                    >
                                        Ler post
                                    </Link>
                                </div>
                            </aside>
                        )
                    })
                }
            </main>
        </div>
    );
}