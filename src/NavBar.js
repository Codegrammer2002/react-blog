import React from "react"
import { Link } from "react-router-dom"
const NavBar = () =>{
    return(
    <nav>
     <ul>
         <li> 
             <Link to ="/"> HomePage</Link>
         </li>
         <li> 
             <Link to ="/about"> About</Link>
         </li>
         <li> 
             <Link to ="/articles-list"> ArticlesList</Link>
         </li>
         {/* <li> 
             <Link to ="/articles"> Articles</Link>
         </li> */}
         
     </ul>
    </nav>
    );
} 
export default NavBar;
