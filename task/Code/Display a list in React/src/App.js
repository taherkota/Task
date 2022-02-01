import './App.css';
import Card from './Cards/Cards';
import data from "./news.json";

function App() {
  return (
    <div>
      <header className='News_header'>
      <h1>News List</h1>
      </header>
      {data.map((value,index)=>{
        return(
          <Card
      ImgSrc={value.articles.urlToImage}
      title={value.articles.title}
      time={value.articles.publishedAt}
      content={value.articles.content}
      source={value.articles.source.name}
      author={value.articles.author}
      link={value.articles.url}
      />
        );
      })}
      
    </div>
  );
}

export default App;
