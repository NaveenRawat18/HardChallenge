
const url = "https://filthy-undershirt-lamb.cyclic.app/hardusers/add"
const PostApi = async (data) => {
    const response = await fetch(url, {
        method: 'Post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();  
}

export {PostApi}
