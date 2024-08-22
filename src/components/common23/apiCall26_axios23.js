import React, { useState, useEffect } from 'react';
import axios from '../../axios23';

export default function Example() {
    const [data, setData] = useState({});    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => { setData(response?.data || {info: "staticData23"} ); })
          .catch(error => { console.error(error); });
    }, []);

    return (
        <div>
            <h2>AXIOS 23</h2>
            <button onClick={() => {}}>axios23</button>
            <div> { JSON.stringify(data) } </div>
        </div>
    );
}