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
        {
            allIconHomes {
                id,
                nameLogoMain,
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
        {
            allIconHomes {
                id,
                nameLogoBasic,
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
    {
        allMainProjects(
          orderBy: createdAt_ASC
        ){
          id,
          nameProject,
          description,
          urlRepo,
          urlProject
        }
    }
`);

return data.allMainProjects;
}

export {
    getMainIconTechs,
    getBasicIconTechs,
    getMainProjects
};