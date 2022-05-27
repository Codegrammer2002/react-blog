import React,{useState, useEffect} from "react";
import ArticlesList from "../components/ArticlesList";
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from "../components/AddCommentFrom";

import {
    useParams
  } from "react-router-dom";

import articleContent from './article-content';

const ArticlePage = () =>{
    // use the useParams to get the name identifier from the article component in HomePage.js
    let {name} =useParams();
    // let articleName = {name};
    // console.log({name});
    // using an arrow function to find the article content from the article content js file.
    let article = articleContent.find(article => article.name === name)
    // console.log(article);
    const[articleInfo, setArticleInfo] = useState({upvotes: 0 , comments: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            // console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);
  
   
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
        <UpvotesSection articleName ={name} upvotes ={articleInfo.upvotes} setArticleInfo = {setArticleInfo} />

        {/* <p>  This post has been upvoted {articleInfo.upvotes} times</p> */}
        {article.content.map((paragraph , key) =>(
            <p key = {key}>{paragraph}</p>
        ))}
         <CommentsList comments ={articleInfo.comments} />

         <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

        <h2>Other related articles</h2>
        {/* <h1>{name} page</h1> */}
        <ArticlesList articles={otherArticles} />
        </>
    );
    
    }

    export default ArticlePage;
    