import useFetch23 from './custom_use-fetch23';

export default function Comp1() {
    // fecth All Todos
    // const [data] = useFetch23('https://jsonplaceholder.typicode.com/todos');
    // return (
    //     <>
    //         { data && data.map((item) => { return <p key = {item.id}> {item.title} </p> }) }
    //     </>
    // )

    // fetch single Todo
    const [data] = useFetch23('https://jsonplaceholder.typicode.com/todos/1');
    return (
        <>
            Comp1 ===  { data ? data.id + "   " +data.title : ''}
        </>
    )
}