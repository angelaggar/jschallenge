const POST_ENDPOINT = "https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json"

let queryString = location.search;
console.log(queryString);

let params = new URLSearchParams(queryString);
console.log(params);

let entryKey = params.get("entryKey");
console.log(entryKey);

const arrPost = []
const getPost = async() =>{
    const res = await fetch("https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json")
    const data = await res.json()
    return(data.posts)
}

    // 
const postPage = ()=> {
    let {author, body, cover, picture, rate, tags, title} = data
    document.getElementById("authorPicture").src = picture;
    document.getElementById("userName").textContent = author;
    document.getElementById("postCover").src = cover;
    document.getElementById("card-tags").textContent = tags;
    document.getElementById("postTitle").textContent = title;
    document.getElementById("postBody").textContent = body;
    document.getElementById("reactionsCounter").textContent = `🤔❤️👍😒 ${rate} Reactions`;
}
conaolw.log(postPage(getPost))





// const openPost = async () => {
//     const postDB = await getPost()
//     let id= postDB.id /* Llama a la propiedad del objeto, donde esta guardado el identificador del post*/
//     let openedPost = document.getElementById("openPost")
//     openedPost.addEventListener("click", () => {
//         window.open(`pages/post.html?entryKey=${id}`, "_blank");
//       });
// }

// openPost()