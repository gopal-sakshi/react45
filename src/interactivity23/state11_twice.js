/*
    State is local to a component instance on the screen.
    We are rendering Gallery twice... if we change state in Gallery; 
    it wont change the state in 2nd Gallery
    Unlike props, state is fully private to the component declaring it. 
    - The parent component can’t change it. 
*/
import Gallery from './state11.js';

export default function Page() {
    return (
        <div style={{display:'flex'}}>
            <Gallery />         { /* 1st instance */ }
            <Gallery />         { /* 2nd instance */ }
        </div>        
    );
}