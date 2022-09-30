import { getArticles, getAuthors } from "./database.js"

const articles = getArticles()
const authors = getAuthors()

document.addEventListener(
    "click",  
    (clickEvent) => {
    
        const itemClicked = clickEvent.target

            console.log(itemClicked.id)

        if (itemClicked.id.startsWith(`${articles.headline}`)) {

        const [,articleId,authorId] = itemClicked.id.split("--")
        theseArticles(articleId, authorId)
         
        }
    }
)





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


