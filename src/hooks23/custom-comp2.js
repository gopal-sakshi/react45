import useFetch23 from './custom_use-fetch23';

export default function Comp2() {

    // make the same API call... but verify if 2nd API call is made (or) not from network tab
    const [data] = useFetch23('https://jsonplaceholder.typicode.com/todos/1');
    return (
        <>
            Comp 2 === { data ? data.id + "   " +data.title : ''}
        </>
    )
}