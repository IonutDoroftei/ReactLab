import axios from "axios";

export const getAllArticles = async () => {
    try {
        const response = await fetch("http://localhost:3000/articles");
        const articles = await response.json();
        return articles;
    } catch (error) {
        console.log(error)
    }
}

export const addNewArticles = async (newArticle) => {
    try {
      const response = await axios.post("http://localhost:3000/articles",newArticle)
      return response
    } catch (error) {
        console.log(error)
    }
}