import { useState } from 'react';


export default function Football() {
    const shoot = (a, b) => {
        console.log("b represents event type ===>", a, b.type);
    }
  
    return (
        <div>
            <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
            <Garage />
            <Form23 />
        </div>
        
    );
}


function Car(props) {
    return <li>I am a { props.brand } </li>;
}
  
function Garage() {
    const cars = [
        {id: 11, brand: 'Ford'},
        {id: 12, brand: 'BMW'},
        {id: 13, brand: 'Audi'}
    ];
    return (
        <>
            <h1>garage lo cars == </h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}


function Form23() {
    const [name23, setName11] = useState("");
    
    function doStuff11(e) {
        console.log("input ==> ", e.target.value);
        setName11(e.target.value);
    }

    const handleSubmit23 = (event) => { 
        event.preventDefault();
        console.log("submit ki mundu ===> ", name23);
    }

    return (
        <div>
            <form onSubmit={handleSubmit23}>
                <label>Enter your name:
                    <input type="text" value={name23} onChange={doStuff11} />
                </label>
                <input type="submit" />
            </form>
            <h3> rcvd value === {name23} </h3>
        </div>


    )
}