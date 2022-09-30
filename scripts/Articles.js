import { getArticles } from "./database.js"

const articles = getArticles()

document.addEventListener(
    "click",  
    (clickEvent) => {
    
        const itemClicked = clickEvent.target

            console.log(itemClicked.id)

        if (itemClicked.id.startsWith(`${articles.headline}`)) {

        const [,articleId] = itemClicked.id.split("--")
        theseArticles(articleId)
         
        }
    }
)





export const theseArticles = (articleId) => {
    for (const article of articles) {
        if (article.id === parseInt(articleId)) {
        window.alert(`${article.body}`)
        }
    }
}

