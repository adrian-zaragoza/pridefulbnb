import React from 'react';

export default () => (
  <div className="blogs-container">
    <h1>Gay travel inspiration from our blog</h1>
    <h2>Gay travel news and gay events from accross the world</h2>

    <div className="blog-posts">
      <div className="blog">
        <figure>
          <img src={window.staycationBlog} alt="tiny house by pool"/>
        </figure>
        <h3>Best pridefulb&b Apartments and LGBTQ-friendly Hotels for a Staycation</h3>
      </div>
      <div className="blog">
        <figure>
          <img src={window.hostStoryBlog} alt="lesbian couple eat and laugh" />
        </figure>
        <h3>Host Story: Pride and Aperitivo in Ancona</h3>
      </div>
      <div className="blog">
        <figure>
          <img src={window.manageQuarantineBlog} alt="man cleans window" />
        </figure>
        <h3>9 Ways to Manage Quarantine: An LGBTQ Guide</h3>
      </div>
    </div>
  </div>
)