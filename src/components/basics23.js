import { useState } from 'react';


export default function Football() {
    const shoot = (a, b) => {
        console.log("b represents event type ===>", a, b.type);
    }
    const style23 = { backgroundColor: 'yellow', color: 'blue' }
    return (
        <div>
            <button style={{color:'red'}} onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
            <Garage/>
            <Form23 />
            <Form24 />
            <h3 style={style23}>apply style23</h3>
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

function Form24() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        console.log("change triggered ====> ", event.target.name, event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("after submit ===> ", inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}/>
            </label>
            <label>Enter your age:
            <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}/>
            </label>
            <input type="submit" />
        </form>
    )
}