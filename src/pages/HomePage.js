import React from "react";
const HomepPage = () =>{
    return (
        <>
        <h1> Welcome to Codegrammer's Blog</h1>
        <p> What can you find on this blog? </p>
        <p> This is just a basic blog that I developed following a tutorial on LinkedLearning </p>
        {/* This is one way to link an image in the webpage. 
        The other way is to download the jpeg or png file and put it in the src folder and then import it as a component and putting it in src in {} */}
        <img src = "https://avatars.githubusercontent.com/u/61944523?v=4" alt = "profile pic" id ="img" />
    
        </>
    );
    
    }

    export default HomepPage;
    