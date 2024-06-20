import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const Articleview: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { articleId } = useParams<{ articleId: string }>();

  useEffect(() => {
    if (articleId) {
      fetchArticleData(articleId);
    }
  }, [articleId]);

  const fetchArticleData = async (articleId: string) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f007eb748d14a5a8979d9f4e2b85a21`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Article");
        }
        return response.json();
      })
      .then((data) => {
        const selectedArticle = data.articles.find(
          (article: Article) => article.author === articleId
        );
        console.log("y",selectedArticle)
        setSelectedArticle(selectedArticle || null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {selectedArticle ? (
        <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Article Content
          </h3>
          <div className="my-4">
            {selectedArticle.urlToImage && (
              <img
                src={selectedArticle.urlToImage}
                alt="Article Thumbnail"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
          <div className="my-4">
            <h1 className="text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              TITLE: {selectedArticle.title}
            </h1>
          </div>
          <div className="text-lg my-4">AUTHOR: {selectedArticle.author}</div>
          <div className="my-4">
            DATE: {new Date(selectedArticle.publishedAt).toDateString()}
          </div>
          <div className="mt-2">
            <p>{selectedArticle.content}</p>
          </div>
          <div className="mt-4">
            <Link to="/home" className="text-blue-500 hover:underline">
              <button className="bg-gray-50 px-4 py-2 sm:px-6 sm:flex sm:flex-row-reverse">
                Close
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Articleview;
