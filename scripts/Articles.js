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

