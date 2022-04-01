async function fetchCmsApi(query, { variables } = {}) {
    const res = await fetch(process.env.DATO_URL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.DATO_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables,
        })
    });

    const json = await res.json();
    if(json.errors){
        throw new Error("Failed to fetch API");
    }

    return json.data;
}

async function getMainIconTechs() {
    const data = await fetchCmsApi(`
        query {
            allIconHomes {
                id
                nameLogoMain
                logoImgMain {
                    url(imgixParams: { fm: jpg, fit: crop, w: 42, h: 42 })
                }
            }
        }
    `);

    return data.allIconHomes;
}

async function getBasicIconTechs() {
    const data = await fetchCmsApi(`
        query {
            allIconHomes {
                id
                nameLogoBasic
                logoImgBasic {
                    url(imgixParams: { fm: jpg, fit: crop, w: 42, h: 42 })
                }
            }
        }
    `);

    return data.allIconHomes;
}

async function getMainProjects(){
    const data = await fetchCmsApi(`
    query {
            allMainProjects(
              orderBy: createdAt_ASC
            ){
              id
              nameProject
              description
              urlRepo
              urlProject
            }
        }
    `);

    return data.allMainProjects;
}

async function getListPosts() {
    const data = await fetchCmsApi(`
        query {
            allPosts {
                id
                title
                slugPost
                content1
                categories
                imgPost {
                    url(imgixParams: { fm: jpg, fit: crop, w: 600, h: 350 })
                    alt
                }
            }
        }
    `);

    return data.allPosts;
}

async function getPost(slug) {
    const data = await fetchCmsApi(`
        query {
            post(
              filter: {
                slugPost: {
                  eq: ${slug}
                }
              }
            ){
                title
                slugPost
                content1
                imgPost {
                    url(imgixParams: { fm: jpg, fit: crop, w: 600, h: 350 })
                  alt
                }
                content2
                imgSecondary  {
                    url(imgixParams: { fm: jpg, fit: crop, w: 600, h: 350 })
                  alt
                }
            }
        }
    `);

    return data.post;
}

async function getAllSlugs(){
    const data = await fetchCmsApi(`
        query {
            allPosts {
              slugPost
            }
        }
    `);

    return data.allPosts;
}

export {
    getMainIconTechs,
    getBasicIconTechs,
    getMainProjects,
    getListPosts,
    getPost,
    getAllSlugs
};