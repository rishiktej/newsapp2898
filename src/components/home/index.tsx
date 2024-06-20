import React from "react";
import Navbar from "./navbar";
import { useAuth } from "../../contexts/authcontext";
import ArticleListItems from "./articles";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar />;
      <ArticleListItems />
    </>
  );
};

export default Home;
