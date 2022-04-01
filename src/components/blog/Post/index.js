/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/blog.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpaces from '../../../../styles/spaces.module.css';

export default function Post({ post }) {
    const arrCategories = post.categories.split(',');
    const formatDate = new Date(post.date);
    const day = formatDate.getDate() + 1;
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();
    
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
                >Publicado em {`${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`}</h3>
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
                <p
                    className={`
                        ${styleFonts["paragraph"]}
                        ${styleFonts["text-white"]}
                        ${styleFonts["text-left"]}
                    `}
                >
                    {post.content1}
                </p>
                {post.imgPost !== null
                && (
                    <img
                        className={styles["post__secondary-img"]}
                        src={post.imgPost.url}
                        alt={post.imgPost.alt}
                    />
                )}
                {post.content2 !== null 
                && (
                    <p
                        className={`
                            ${styleFonts["paragraph"]}
                            ${styleFonts["text-white"]}
                            ${styleFonts["text-left"]}
                        `}
                    >
                        {post.content2}
                    </p>
                )}
            </main>
        </div>
    );
}