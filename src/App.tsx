import React, {useEffect, useState} from 'react';
import './App.css';

type getPlaceHolderObjectType = {
  'userId': number
  'id': number
  'title': string
  'body': string
}

function App() {

  const [posts, setPosts] = useState<getPlaceHolderObjectType[]>([]);

  const getPlaceHolderAPI = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    setPosts(data);
  }

  useEffect(() => {
    getPlaceHolderAPI()
  }, [])

  return (
      <div className="App">
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
