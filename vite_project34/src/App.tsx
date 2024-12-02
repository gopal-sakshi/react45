import React from 'react';
import './App.css';
import { add23 } from '@/lib23';

function App():JSX.Element {

    return (
        <>
            <h3>welcome to react, vite, typescript23</h3>
            <h3> sum of 3, 55 == {add23(3,55)} </h3>
            <h4> concat 23 == { add23('rma', 'cf') }  </h4>
        </>
    )
}

export default App
