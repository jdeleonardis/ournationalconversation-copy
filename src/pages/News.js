import React from 'react';
import { Helmet } from 'react-helmet';
import FilterBar from '../components/Filters/FilterBar';
import NewsBoard from '../components/Content/ContentBoards/NewsBoard';

class News extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Our National Conversation | News</title>
        </Helmet>
        <h1 className='NewsTitle'>NEWS</h1>

        <div className='NewsFilter'>
          <FilterBar />
        </div>
        <NewsBoard />
      </div>
    );
  }
}

export default News;
