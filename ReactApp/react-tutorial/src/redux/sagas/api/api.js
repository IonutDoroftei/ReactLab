export const getAllArticles = async () => {
    try {
        const response = await fetch("http://localhost:3000/articles");
        const articles = await response.json();
        return articles;
    } catch (error) {
        console.log(error)
    }
}