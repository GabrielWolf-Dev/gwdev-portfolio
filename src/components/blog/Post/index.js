/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/blog.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function Post({ post }) {
    const arrCategories = post.categories.split(',');
    const [year, month, day] = post.date.split('-');
    const content1Formated = post.content1.split('break');
    const content2Formated = post.content2.split('break');

    return(
        <div className={styles["container-blog"]}>
            <main className={`container ${styleFonts["text-center"]}`}> 
                <h1
                    className={`
                        ${styleFonts["title"]}
                        ${styleFonts["text-green"]}
                        ${styleFonts["text-center"]}
                    `}
                >{post.title}</h1>
                <h3
                    className={`
                        ${styleFonts["paragraph"]}
                        ${styleFonts["text-white"]}
                        ${styleSpaces["my-16"]}
                    `}
                >Publicado em {`${day}/${month}/${year}`}</h3>
                {arrCategories.map((category, index) => 
                    <div
                        className={`
                            ${styles["post__tags"]}
                        `}
                        key={index}
                    >{category}</div>
                )}
                <img
                    className={styles["post__main-img"]}
                    src={post.imgPost.url}
                    alt={post.imgPost.alt}
                />
                {content1Formated.map((content, index) => (
                    <p
                        key={index}
                        className={`
                            ${styleFonts["paragraph"]}
                            ${styleFonts["text-white"]}
                            ${styleFonts["text-left"]}
                        `}
                    >
                        {content}
                    </p>
                ))}
                {post.imgPost !== null
                && (
                    <img
                        className={styles["post__secondary-img"]}
                        src={post.imgSecondary.url}
                        alt={post.imgSecondary.alt}
                    />
                )}
                {post.content2 !== null 
                && content2Formated.map((content, index) => (
                    <p
                        key={index}
                        className={`
                            ${styleFonts["paragraph"]}
                            ${styleFonts["text-white"]}
                            ${styleFonts["text-left"]}
                        `}
                    >
                        {content}
                    </p>
                ))}
            </main>
        </div>
    );
}