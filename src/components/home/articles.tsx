import React, { Fragment, useEffect, useState } from "react";
import { useArticleDispatch, useArticleState } from "../../contexts/articles/context";
import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../contexts/articles/action";

export default function ArticleDataListItems() {
   const p_dispatch = useArticleDispatch();
  useEffect(() => {
    fetchArticles(p_dispatch);
  }, []);
  const state = useArticleState();
  console.log("state:", state);
  const { articles, isLoading, isError, errorMessage } = state;
  console.log(articles);

  if (isLoading) {
    return <span className="text-center">Loading...</span>;
  }

  if (isError) {
    return <span className="text-center">{errorMessage}</span>;
  }

  return (
    <div className="space-y-3">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
        {articles.map((article) => (
          <div
            key={article.source.id}
            className="bg-white p-1 rounded shadow-sm"
          >
            <Card
              w="750px"
              className="bg-white border-black border-4 border-grey-500"
            >
              <Image
                objectFit="cover"
                maxH="200px"
                src={article.urlToImage}
                alt="Article Thumbnail"
              />
              <CardBody>
                <Heading
                  className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  size="lg"
                >
                  {article.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  Date: {new Date(article.publishedAt).toDateString()}
                </Text>
                <Text className="text-left " fontSize="sm">
                  Summary: {article.description}
                </Text>
                <Link to={`${article.author}`} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" >
                  click here for detailed view:
                </Link>
              </CardBody>
            </Card>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}
