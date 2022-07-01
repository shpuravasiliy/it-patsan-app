import React, {useEffect, useState} from 'react';
import './App.css';
import {apiPlaceHolder, getPlaceHolderObjectType} from './api/apiPlaceHolder';


function App() {

  const [posts, setPosts] = useState<getPlaceHolderObjectType[]>([]);

  // const getPlaceHolderAPI = async () => {
  //   const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await result.json();
  //   setPosts(data);
  // }

  useEffect(() => {
    apiPlaceHolder.get()
        .then(res => {
          setPosts(res.data)
        })
  }, [])

  return (
      <div className="App">
        <h1>Second version</h1>
        {posts.map(element => {
          return (
              <div key={element.id}>
                <span>{element.id}-</span>
                <span>{element.title}</span>
              </div>
          )
        })}
      </div>
  );
}

export default App;
