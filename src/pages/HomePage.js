import React from "react";
const HomepPage = () =>{
    return (
        <>
        <h1> Welcome to Codegrammer's Blog!</h1>
        <h2> What can you find on this blog? </h2>
         <p> Go on the About page for info. </p>
       
       <h2 style={{fontFamily:"Times New Roman"}}> I am looking for a developer and I want to see your other projects. </h2>
        {/* This is one way to link an image in the webpage. 
        The other way is to download the jpeg or png file and put it in the src folder and then import it as a component and putting it in src in {} */}
        <p> Thank you for taking the time to view this project. You can find more projects on my Github. Please click the image below to get directed to my Github profile.</p>
        <div style={{textAlign: "center"}}>
        <a href="https://github.com/Codegrammer2002" target="_blank" rel="noopener noreferrer"> <img src = "https://avatars.githubusercontent.com/u/61944523?v=4" alt = "profile pic" id ="img" /> </a>
        </div>
        </>
    );
    
    }

    export default HomepPage;
    