import { getArticles } from "./database.js"

const articles = getArticles()

document.addEventListener(
    "click",  
    (clickEvent) => {
    
        const itemClicked = clickEvent.target

            console.log(itemClicked.id)

        if (itemClicked.id.startsWith(`${articles.headline}`)) {

        const [,articleId, authorId] = itemClicked.id.split("--")
        theseArticles(articleId)
         
        }
    }
)





// export const theseArticles = (articleId) => {
//     for (const article of articles) {
//         if (article.id === parseInt(articleId)) {
//         window.alert(`${article.body}`)
//         }
//     }
// }

export const theseArticles = (articleId, authorId) => {
    for (const article of articles) {
        if (article.id === parseInt(articleId)) {
        window.alert(`${article.body}`)
        }
    for (const author of authors) {
        if (articles.authorId === parseInt(authorId)) {
            window.alert(`${author.name}`)
        }
    }
    }
}
