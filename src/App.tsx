import React from "react";
import router from "./routes";
import { AuthProvider } from "./contexts/authcontext";
import { RouterProvider } from "react-router-dom";
import { ArticleProvider } from "./contexts/articles/context";

function App() {
  return (
    <AuthProvider> 
    <ArticleProvider>
        <RouterProvider router={router} />
    </ArticleProvider>
    </AuthProvider>
  );
}

export default App;
