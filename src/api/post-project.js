async function postProject(projectData) {
    const url =`${import.meta.env.VITE_API_URL}/createproject/`;

    const response = await fetch(url,{
        method:"POST", 
        headers:{
            'Content-Type':"application/json",
            'Authorization': `Token ${window.localStorage.getItem('token')}`
        },
        body: JSON.stringify(projectData)
    })

    if (!response.ok) {
        const fallbackError =`Error trying to login`;
        const data =await response.json().catch(() =>{
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postProject;