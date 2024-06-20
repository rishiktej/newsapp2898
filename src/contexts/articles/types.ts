import { Url } from "url";

export type source={
    id:string,
    name:string
}

export type articles = {
    source:source,
  author:string,
  title:string,
  description:string,
  url:Url,
  urlToImage:Url,
  publishedAt:string,
  content:string,
};
export type articleData = Omit<articles,"description">;
export type ArticleListState = {
  articles: articleData[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};
export enum ArticleListAvailableAction {
  // ... (existing actions)
  FETCH_ARTICLE_REQUEST = "FETCH_ARTICLE_REQUEST",
  FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS",
  FETCH_ARTICLE_FAILURE = "FETCH_ARTICLE_FAILURE",
}

// Add a new action type for MATCH
export type ArticleActions =
  | { type: ArticleListAvailableAction.FETCH_ARTICLE_REQUEST }
  | {
      type: ArticleListAvailableAction.FETCH_ARTICLE_SUCCESS;
      payload: articleData[];
    }
  | {
      type: ArticleListAvailableAction.FETCH_ARTICLE_FAILURE;
      payload: string;
    }
export type ArticleDispatch = React.Dispatch<ArticleActions>;

