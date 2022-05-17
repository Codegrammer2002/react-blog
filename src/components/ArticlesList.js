import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({articles}) =>{
    return (
        <>
          {/* <h1> Here is a list of all the articles on this blog</h1> */}
        {/* Mapping the data over in a h3. */}
        {articles.map((article , key) => (
           
            <Link key={key} className ="article-list-item" to={`/articles/${article.name}`}>
                
            <h3 key = {key} >{article.title} </h3>
            <p>{article.content[0].substring(0,150)}...</p>
            </Link>
 
        ))}
       
    
        </>
    );

}
export default ArticlesList;
