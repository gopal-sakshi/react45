// stopping propagation --  bubbling

export default function Toolbar() {
    return (
        <div className="Toolbar23" onClick={() => { console.log('You clicked on the toolbar!'); }}>
            <Button onClick={() => console.log('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => console.log('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    // I ==> bubbling happens; btn meeda click chesina, parent ayina div Toolbar23 click handler kooda trigger autundi
    // II ==>  stopPropagation; so bubbling wont happen
    return (
        <div>
            
            {/* <button onClick={onClick}>
                {children}
            </button> */}

            <button onClick={e => {
                e.stopPropagation();        // bubbling aapesayi
                onClick();                  // actual event handler in ippudu manual ga trigger cheyyi
            }}>
                {children}
            </button>
        </div>
    );
}

/*
    prevent default behaviour
    - Some browser events have default behavior associated with them. 
    - For example, a <form> submit event, which happens when a button inside of it is clicked, 
        will reload the whole page by default:
    - so stop such default thingies --> we use event.preventDefault();

    e.stopPropagation()         stops the event handlers attached to the tags above from firing.
    e.preventDefault()          prevents the default browser behavior for the few events that have it.
*/