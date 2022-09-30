<<<<<<< HEAD
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


=======
import { getArticles } from "./database.js"

const articlesArray= getArticles()

//return an html representation of each article that will only display the title of the article itself.

const articleList = () => {
    articleHTML= ""
    for (const article of articlesArray){
        articleHTML +=`<div>The title of this article is ${article.headline}</div>`
    }
    
    return articleHTML
}

>>>>>>> 5d2945a1cbd92562f587b079f26fd1d26be028a1
