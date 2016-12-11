/*
A new custom page just for our app. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';

const MyCustomPage = ({document, currentUser}) => {
  
  const post = document;
  
  return (
    <div>
      <h1>Welcome To My Custom Page!</h1>
      <p>Nice to meet you.</p>
    
      <Telescope.components.PostsGridItem post={post}/>
      
    </div>
  )
}

export default MyCustomPage;