//botones//
const relevant = document.getElementById("relevant")
const latest = document.getElementById("latest")
const top = document.getElementById("top")

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
    cardColumn.append(mainC)
}
const cardsRelevant = async() =>{
    cardColumn.innerHTML = ""
    const postDb = await getPost()
    await [postDb][0].sort((a, b) => { return b.rate - a.rate})
    cardGen(postDb[0])
    await [postDb][0].sort(() =>{return Math.random() - 0.5})
    postDb.map((item) =>{
        cardGen(item)
    })
}
cardsRelevant()

const cardsLatest = async() =>{
    cardColumn.innerHTML = ""
    const postDb = await getPost()
    await [postDb][0].sort((a, b) => { return new Date(b.time).getTime() - new Date(a.time).getTime()})
    console.log(postDb)
    postDb.map((item) =>{
        cardGen(item)
    })
    console.log("hola")
}
const cardsTop = async() =>{
    cardColumn.innerHTML = ""
    const postDb = await getPost()
    await [postDb][0].sort((a, b) => { return b.rate - a.rate})
    postDb.map(item =>{
        cardGen(item)
    })
    console.log("hola")
}

relevant.addEventListener("click", function(e){
    e.preventDefault
    cardsRelevant()
})
latest.addEventListener("click", function(e){
    e.preventDefault
    cardsLatest()
})
top.addEventListener("click", function(e){
    e.preventDefault
    cardsTop()
})


// const openPost = () => {
//     let card = getElementById("openPost")

//     card.addEventListener("click", function(e)){
//         e.preventDefault
//         window.open(``)

//     }
// }


// const arrPost = []
// const getPost = async() =>{
//     const res = await fetch("https://desafiodev-5e779-default-rtdb.firebaseio.com/posts.json")
//     const data = await res.json()
//    return(data.posts)
// }



const asideRightTag = (tag) =>{
    let tagBoxCreator = getElementById("tagBoxCreator")
    const tagName = (tag) =>{
        const tagTitle = createElement(h4)
        tagTitle.classList.add("border-bottom-1", "border-secondary-subtle","px-3", "py-2", "mb-0", "fw-bold")
        tagTitle.innerText = `#${tag}`
        return tagTitle
    }

    const taggedPost = () =>{
        const taggedPostBox = document.createElement("div")
        taggedPostBox.classList.add("border", "border-bottom-1", "border-secondary-subtle", "px-3", "py-1")

        const taggedPostTitle = document.createElement("div")
        taggedPostTitle.classList.add("text-decoration-none", "text-dark")
        taggedPostTitle.setAttribute("href", url)
        taggedPostTitle.innerText = "EL NOMBRE DEL POST"

        const taggedPostComC = document.createElement("div")
        taggedPostComC.classList.add("fs-6", "fw-light", "m-0")
        taggedPostComC.innerText = "LA CANTIDAD DE COMENTARIOS"
    }



}

