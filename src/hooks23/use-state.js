function FavoriteColor() {
    const [color, setColor] = useState("black");
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")} >Blue</button>
            <button type="button" onClick={() => setColor("red")} >Red</button>
        </>
    )
}

/*
    never directly update state. Ex: color = "red" is not allowed.
    we must always use setColor
*/


export default function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
  
    const updateColor = () => {
        
        // setCar({color: "blue"}),         // this would remove the brand, model, and year from our state.

        // thats why we use JS spread operator
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }
  
    return (
        <>
            <FavoriteColor />
            <h1>My {car.brand}</h1>
            <p> It is a {car.color} {car.model} from {car.year} </p>
            <button type="button" onClick={updateColor} >Blue</button>
        </>
    )
}