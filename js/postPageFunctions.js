const POST_ENDPOINT = "https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json"

let queryString = location.search;
console.log(queryString)

let params = new URLSearchParams(queryString);
console.log(params);

let entryKey = params.get("entryKey");
console.log(entryKey);

/////// Generador de Post
let mainCard = document.getElementById("mainCard")

const getEntryById = async (entryKey) => {
    let response = await fetch(`${POST_ENDPOINT},${entryKey}.json`);
    console.log(response)
    let data = await response.json();
    console.log(data);
    if (data) {
        let {author, body, cover, picture, rate, tags, title} = data
        document.getElementById("authorPicture").src = picture;
        document.getElementById("userName").textContent = author;
        document.getElementById("postCover").src = cover;
        document.getElementById("card-tags").textContent = tags;
        document.getElementById("postTitle").textContent = title;
        document.getElementById("postBody").textContent = body;
        document.getElementById("reactionsCounter").textContent = `🤔❤️👍😒 ${rate} Reactions`;
    } 
}

getEntryById(entryKey)

const printPost = async() =>{
    mainCard.innerHTML = ""
   
    filterResult.map(post =>{
        getEntryById(post)
    })}
    printSearch()
}
