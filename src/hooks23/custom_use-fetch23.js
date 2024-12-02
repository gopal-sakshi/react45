/*
    Hooks are reusable functions.
    there is a logic/functionality... 
    this logic/functionality needs to be used by multiple components
    extract that logic ====> to a custom Hook; 
*/

import { useState, useEffect } from "react";

const useFetch23 = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    return [data];
};

export default useFetch23;