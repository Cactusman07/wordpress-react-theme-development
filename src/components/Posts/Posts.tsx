import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function Posts(){
  const posts = useFetch('/wp-json/wp/v2/posts');
  
  return (
    <React.Fragment>
      {posts.map((post, index) => (
        <div key={index}>
          <h5 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
          <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </div>
      ))}
    </React.Fragment>
  );
}