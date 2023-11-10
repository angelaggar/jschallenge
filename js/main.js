///////////////API para llamar a los post/////////////
const arrPost = []
const getPost = async() =>{
    const res = await fetch("https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json")
    const data = await res.json()
   return(data.posts)
}


//////////////Generador de cards///////////////////
let cardColumn = document.getElementById("cardColumn")
const cardGen = async(postDb) =>{
    
    const {author, body, comments, cover, picture, rate, tags, time, title} = postDb
    console.log(cover)
    const mainC = document.createElement("div")
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
    const commentsC = document.createElement("a")

    //reacciones//
    reactionContainer.classList.add("d-flex", "flex-row", "p-2")
    reactions.classList.add("mx-2", "fs-6")
    commentsC.classList.add("mx-2", "f-6", "text-recoration-none")
    reactionContainer.append(reactions, commentsC)

    //hashtags//
    hashTagsContainer.classList.add("pl-5")
    hashTag.classList.add("badge", "text-bg-light", "text-decoration-none")
    hashTagsContainer.append(hashTag)

    //card info//
    infoText.classList.add("card-text")
    infoTitle.classList.add("card-title", "fw-bold")
    info.append(infoText, infoTitle)

    //info container//
    infoContainer.classList.add("p-4")
    infoContainer.append(info, hashTag, reactionContainer)

    //icon profile//
    userNameText.classList.add("card-text")
    profilePic.classList.add("card-img-top", "rounded-circle")
    profilePic.classList.add("w-3")
    profilePic.setAttribute("src", `${picture}`)
    profilePic.setAttribute("style", "width: 35px;")
    infoUser.classList.add("post-Creator", "card-body", "d-flex", "flex-row")
    infoUser.append(profilePic, userNameText)

    //top image// 
    image.classList.add("card-img-top")
    image.setAttribute("src", `${cover}`)
    anchor.classList.add("postlink")
    anchor.append(image)
    
    //full card//
    mainC.classList.add("card", "m-1")
    mainC.append(anchor, infoUser, infoContainer)
    cardColumn.append(mainC)
    console.log(cardColumn)
}
const cardsDb = async() =>{
    const postDb = await getPost()

    postDb.map(item =>{
        cardGen(item)
    })
}
cardsDb()