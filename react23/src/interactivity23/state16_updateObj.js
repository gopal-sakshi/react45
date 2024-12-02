import { useState } from 'react';
export default function MovingDot() {
    
    const [position23, setPosition] = useState({
        x: 0,
        y: 0
    });

    const style11 = { position: 'relative', width: '100vw', height: '100vh', };
    const style12 = { position: 'absolute', backgroundColor: 'red', borderRadius: '50%', 
        transform: `translate(${position23.x}px, ${position23.y}px)`, left: -10, top: -10, width: 20, height: 20, };
    
    // this WONT WORK ---> while technically we changed position23; re-render isnt called again
    // without using the state setting function, React has no idea that object has changed. 
    // So React does not do anything in response
    function handlePointerMoved_wontWork(e) {
        position23.x = e.clientX;
        position23.y = e.clientY;
    }
    
    function handlePointerMoved(e) {
        // we are calling setPosition ---> we are updating the state "position" -- now React must re-render with new "position23"
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <div style={style11} onPointerMove={handlePointerMoved_wontWork}>
            <div style={style12}/>
        </div>
    );
}
