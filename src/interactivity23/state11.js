import { sculptureList } from './state11_data';
import { useState } from 'react';

/*
    handleClick event handler is updating a local variable, "index"
    But two things prevent that change from being visible:
    - Local variables don’t persist between renders. 
        When React renders this component a second time, it renders it from scratch—
        it doesn’t consider any changes to the local variables.
    - Changes to local variables won’t trigger renders. 
        React doesn’t realize it needs to render the component again with the new data.

    To update a component with new Data --> 
    - retain data between renders;      
    - trigger react to render the component with new data

    useState(state, setState)   ===> state retains data between renders; setState() triggers React to render component again
*/
export default function Gallery() {
    
    // let index = 0;                                           // index is local variable
    const [index, setIndex] = useState(0);                      // index is now state variable & setIndex = setter Fn
    const [showMore, setShowMore] = useState(false);
    const length23 = sculptureList.length;
    console.log("length23 ===> ", length23);

    function handleClick() {
        // index = index + 1;
        console.log("index ===> ", index)
        if(index < length23-1) setIndex(index + 1);
        else { console.log("index ==> ", index)}
    }
    function handlePreviousClick() {
        setIndex(index-1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <div style={{border: '1px solid', margin: '10px', padding: '10px'}}>
            {index > 0 && <button onClick={handlePreviousClick}> Previous </button>}
            {index < length23-1 && <button onClick={handleClick}> Next </button>}
            <h2> <i>{sculpture.name} </i> by {sculpture.artist} </h2>
            <h3> ({index + 1} of {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            {/* <p> {sculpture.description} </p> */}
            <div><button onClick={handleMoreClick}> {showMore ? 'Hide' : 'Show'} desc23 </button></div>
            {showMore && <p>{sculpture.description}</p>}
        </div>
    );
}
