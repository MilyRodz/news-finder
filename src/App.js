import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import NewsList from './components/NewsList';

function App() {

  // define category and news
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const ConsultAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5212e9efcbb94877aa0cdf6939081a1e`;
    
      const response = await fetch(url);
      const news = await response.json();

      saveNews(news.articles);
    }    
    ConsultAPI ();
  }, [category]);


  return (
    <Fragment>
      <Header 
        title='News finder'
      />

      <div className="container white">
        <Formulario 
          saveCategory={saveCategory}
        />

        <NewsList 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
