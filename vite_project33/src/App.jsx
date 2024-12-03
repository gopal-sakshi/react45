import { useState } from 'react';
import './App.css';
import Formik23 from './formik23'
function App() {
    const str23 = 'vite_react_js23';
    const [formik23, setFormik] = useState(false);

    return (
        <>
            <h3>Welcome to { str23 } </h3>
            <div>
                <button onClick={() => setFormik(!formik23)}>formik23</button>
                { formik23 ? <div><Formik23 /></div> : '' }
            </div>
        </>
    )
}

export default App;
