import { getAuthors } from "./database.js"

const authors = getAuthors()

document.addEventListener(
    "click",  
    (clickEvent) => {
    
        const itemClicked = clickEvent.target

            console.log(itemClicked.id)

        if (itemClicked.id.startsWith("Authors")) {

        const [,authorId] = itemClicked.id.split("--")
        theseAuthors(authorId)
         
        }
    }
)





export const theseAuthors = (authorId) => {
    for (const author of authors) {
        if (author.id === parseInt(authorId)) {
        window.alert(`${author.name}/s biography: ${author.bio}`)
        }
    }
}



