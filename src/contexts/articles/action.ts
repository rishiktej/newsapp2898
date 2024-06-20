import { API_KEY } from "../../config/constants";
import {
  ArticleListAvailableAction,
  ArticleDispatch,
} from "./types";

export const fetchArticles = async (
  dispatch: ArticleDispatch,
) => {
  console.log("hello");
  try {
    dispatch({ type: ArticleListAvailableAction.FETCH_ARTICLE_REQUEST });

    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f007eb748d14a5a8979d9f4e2b85a21`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch Article");
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
