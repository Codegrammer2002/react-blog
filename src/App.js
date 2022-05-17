
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import HomePage  from './pages/HomePage';
import Error404 from './pages/Error404';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        console.log(<NavBar />);

        <div id ="page-body">
        <Routes>
        <Route path ="/" element ={<HomePage />} exact/>
        <Route path ="/home" element ={<HomePage />} />
        <Route path ="/about" element ={<AboutPage />} />
        {/* useParama() in the Article.js pageo to get the name idenitifer */}
        <Route path ="/articles/:name" element ={<ArticlePage />} />

        <Route path ="/articles-list" element ={<ArticlesListPage />} />

        {/* This is the error 404 page */}
        <Route path = "*" element = {<Error404 /> } />

        </Routes>
        </div>
    
   
     
    </div>
    </Router>

  );
}

export default App;
