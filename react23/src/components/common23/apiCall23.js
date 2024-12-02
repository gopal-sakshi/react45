import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Example() {
    const [xml23, setXml23] = useState(null);
    const [data, setData] = useState(null);
    const [posts, setPosts] = useState(null);
    function useXML23() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8081');
        xhr.onload = function () {
            if (xhr.status === 200) {
                // setData(JSON.parse(xhr.responseText));
                setXml23(xhr.responseText);
            }
        };
        xhr.send();
    }

    useEffect(() => {
        fetch('http://localhost:8081/json23')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => { setPosts(response.data); })
          .catch(error => { console.error(error); });
    }, []);

    function fetch23() {
        console.log("you cant use useEffect inside a function");
        console.log("react hooks must be at the top of FunctionComponent")
    }

    function axios23() {
        console.log("you cant use useEffect inside a function");
        console.log("react hooks must be at the top of FunctionComponent")
    }

    return (
        <div>
            <h2> XML23 </h2>
            <button onClick={useXML23}>XML23</button>
            <div> {xml23 ? xml23 : 'XML info load avvaledu'} </div>
            <hr></hr>
            <h2>Fetch23</h2>
            <button onClick={fetch23}>fetch23</button>
            { data ? 
                <div>{JSON.stringify(data)}</div> : 
                <div>Loading...</div> 
            }
            <hr></hr>
            <h2>AXIOS 23</h2>
            <button onClick={axios23}>axios23</button>


            {/* APPROACH I ======= idi work avvaledu */}
            {/* { posts ? 
                <div>
                    { console.log("posts ===> ", posts) }
                    posts load ayyaya ledaa ??
                    <ul>
                        { posts?.map((post) => {
                            <li key={post.id}> {post.title} </li>
                        }) }
                    </ul>
                </div> : 
                <div> axios data raaledu </div>
            } */}



            {/* APPROACH II ==== idi work avvaledu */}
            {/* <div>
                { console.log("posts ===> ", posts) }
                posts load ayyaya ledaa ??
                <ul>
                    { posts?.map((post) => {
                        <li key={post.id}> {post.title} </li>
                    }) }
                </ul>
            </div> */}



            {/* APPROACH III === idi work autundi */}
            <div> { JSON.stringify(posts) } </div>
        </div>
    );
}