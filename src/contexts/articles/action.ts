import { API_KEY } from "../../config/constants";
import {
  ArticleListAvailableAction,
  ArticleDispatch,
} from "./types";

export const fetchArticles = async (
  dispatch: ArticleDispatch,
) => {
  try {
    dispatch({ type: ArticleListAvailableAction.FETCH_ARTICLE_REQUEST });

    const url = `https://newsapi.org/v2/everything?q=Apple&from=2024-06-21&sortBy=popularity&apiKey=${API_KEY}`;
    console.log("Fetching articles from URL:", url);
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch Article Status");
        }
        return response.json();
      })
      .then(data => {
        console.log("data", data);

        dispatch({
          type: ArticleListAvailableAction.FETCH_ARTICLE_SUCCESS,
          payload: data.articles,
        });
      })
      .catch(error => {
        console.error("Operation failed:", error);
        dispatch({
          type: ArticleListAvailableAction.FETCH_ARTICLE_FAILURE,
          payload: error.message || "Unable to load Article",
        });
      });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: ArticleListAvailableAction.FETCH_ARTICLE_FAILURE,
      payload: error.message || "Unable to load Article",
    });
  }
};
