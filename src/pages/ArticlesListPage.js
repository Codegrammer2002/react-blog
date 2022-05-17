// These are the imports for Article list page in the blod
import React from "react";
import articleContent from "./article-content";
import ArticlesList  from "../components/ArticlesList";
const ArticlesListPage = () =>{
    return (
        <>
          <h1> Here is a list of all the articles on this blog</h1>
          <ArticlesList articles={articleContent} />

    
        </>
    );
    
    }

    export default ArticlesListPage;
    