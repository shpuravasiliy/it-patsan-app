import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {apiPlaceHolder, getPlaceHolderObjectType, instance} from './api/apiPlaceHolder';
import {getAC, JsonPlaceHolderReducer} from './reduser/JsonPlaceHolderReducer';


function App() {

    const [posts, dispatchPosts] = useReducer(JsonPlaceHolderReducer, []);

    // const getPlaceHolderAPI = async () => {
    //   const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const data = await result.json();
    //   setPosts(data);
    // }

    useEffect(() => {
        apiPlaceHolder.get()
            .then(res => {
                dispatchPosts(getAC(res.data))
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
