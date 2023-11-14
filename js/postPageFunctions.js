const POST_ENDPOINT = "https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json"

let queryString = location.search;
console.log(queryString)

let params = new URLSearchParams(queryString);
console.log(params);

let entryKey = params.get("entryKey");
console.log(entryKey);

const getEntryById = async (entryKey) => {
    let response = await fetch(`${POST_ENDPOINT}/${entryKey}.json`);
    console.log(response)
    let data = await response.json();
    console.log(data);
    return data;
}

/////// Generador de Post
let mainC = document.getElementById("mainCard")

const cardGen = async(postDb) =>{
    const {author, body, comments, cover, picture, rate, tags, time, title, id} = postDb
    
    const anchor = document.createElement("a")
    const image = document.createElement("img")
    const infoUser = document.createElement("div")
    const profilePic = document.createElement("img")
    const userNameText = document.createElement("h5")
    const infoContainer = document.createElement("div")
    const info = document.createElement("div")
    const infoTitle = document.createElement("h2")
    const infoText = document.createElement("p")
    const hashTagsContainer = document.createElement("div")
    const hashTag = document.createElement("p")
    const reactionContainer = document.createElement("div")
    const reactions = document.createElement("div")
    const commentsC = document.createElement("p")
    const date = document.createElement("p")
    const contDate = document.createElement("div")

    //reacciones//
    reactionContainer.classList.add("d-flex", "flex-row", "p-2")
    reactions.classList.add("mx-2", "fs-6")
    reactions.innerText = `🤔❤️👍😒Reactions ${rate}`
    commentsC.classList.add("mx-2", "f-6", "text-decoration-none")
    comments.length == 0 || comments.length == undefined ? commentsC.innerText =`🗨️ Add Comment`: commentsC.innerText = `🗨️ Comments ${comments.length}`
    reactionContainer.append(reactions, commentsC)

    //hashtags//
    hashTagsContainer.classList.add("pl-5")
    hashTag.classList.add("badge", "text-bg-light", "text-decoration-none")
    hashTag.innerHTML = tags
    hashTagsContainer.append(hashTag)

    //card info//
    infoText.classList.add("card-text")
    infoTitle.classList.add("card-title", "fw-bold")
    infoTitle.innerHTML = title
    infoText.innerHTML = body
    info.append(infoTitle, infoText)

    //info container//
    infoContainer.classList.add("p-4")
    infoContainer.setAttribute("id", "openPost")
    infoContainer.append(info, hashTag, reactionContainer)

    //icon profile//
    userNameText.classList.add("card-text", "p-2")
    profilePic.classList.add("card-img-top", "rounded-circle")
    profilePic.classList.add("w-3")
    profilePic.setAttribute("src", `${picture}`)
    profilePic.setAttribute("style", "width: 85px;")
    infoUser.classList.add("post-Creator", "card-body", "d-flex", "flex-row")
    contDate.classList.add("d-flex", "flex-column", "ps-2")
    userNameText.innerHTML = author
    date.innerText = new Date(time).toLocaleDateString('en-us', { month:"short", day:"numeric"}) 
    contDate.append(userNameText, date)
    infoUser.append(profilePic, contDate)


    //top image// 
    image.classList.add("card-img-top")
    image.setAttribute("src", `${cover}`)
    
    anchor.classList.add("postlink")
    anchor.append(image)
    
    //full card//
    mainC.classList.add("card", "m-1")
    mainC.append(anchor, infoUser, infoContainer)
    mainC.setAttribute("id", `${id}`)
    cardColumn.append(mainC)
}






cardGen(data)

const printPost = async () =>{
    mainC.innerHTML= ""
    const data = await getEntryById(entryKey);
    cardGen(data)
}