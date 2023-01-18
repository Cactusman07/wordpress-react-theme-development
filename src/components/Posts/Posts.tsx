import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function Posts(){
  const posts = useFetch('/wp-json/wp/v2/attributes');

  return (
    <React.Fragment>
      <div id="frontPagePosts">
        <h1>Attributes</h1>
        {!!posts ? posts.map((post: { title: { rendered: string; }; }, index: React.Key) => (
          <div className="post" key={index} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        )) : <p>Loading...</p> }
      </div>
    </React.Fragment>
  );
}