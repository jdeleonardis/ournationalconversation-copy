import React from 'react';
import FilterBar from '../layout/FilterBar';
import NewsBoard from '../layout/ContentBoards/NewsBoard'



class News extends React.Component {
    render() {
      return (
       
          <div>
            <title>Our National Conversation | News</title>
            <h1 className = "NewsTitle">NEWS</h1>
        
            <div className = "NewsFilter">
              <FilterBar />
            </div>
              <NewsBoard />
              
          </div>
       
      );
    }
  }

  export default News;
