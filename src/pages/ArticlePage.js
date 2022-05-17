import React from "react";
import ArticlesList from "../components/ArticlesList";

import {
    useParams
  } from "react-router-dom";

import articleContent from './article-content';

const ArticlePage = () =>{
    // use the useParams to get the name identifier from the article component in HomePage.js
    let {name} =useParams();
    // let articleName = {name};
    console.log({name});
    // using an arrow function to find the article content from the article content js file.
    let article = articleContent.find(article => article.name === name)
    console.log(article);

    const otherArticles = articleContent.filter(article => article.name !==name);

    if(!article){
    return(
        <div className = "err">
            <h1> Sorry we couldn't find the article you were look for! </h1>
            <p>Error: {name} not found</p>
        </div>
    );
    }
    return (
        <>
        <h1> {article.title}</h1>
        {article.content.map((paragraph , key) =>(
            <p key = {key}>{paragraph}</p>
        ))}
        <h2>Other related articles</h2>
        {/* <h1>{name} page</h1> */}
        <ArticlesList articles={otherArticles} />
        </>
    );
    
    }

    export default ArticlePage;
    