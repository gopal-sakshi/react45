import { useContext } from 'react';
import UseState23 from './use-state';
import UseEffect10 from './use-effect10';
import UseEffect11 from './use-effect11';
import UseEffect12 from './use-effect12';
import UseEffect13 from './use-effect13';
import UseContext11 from './use-context11';
import UseContext12 from './use-context12';
import { AuthContext } from './use-context13_auth';
import UseRef11 from './use-ref11';
import UseRef12 from './use-ref12';
import UseRef13 from './use-ref13';
import UseReducer11 from './use-reducer11';
import UseCallback11 from './use-callback11';
import UseCallback12 from './use-callback12';
import UseCallback13_problem from './use-callback13_problem';
import UseCallback13 from './use-callback13';
import UseMemo11 from './use-memo11'


export default function() {
    // const { isLoggedIn, logout } = useContext(AuthContext);

    var style23 = {
        border: '1px solid', margin: '5px', padding: '5px', width: 'fit-content' 
    }
    return (
        <>
            {/* <div style={style23}><UseState23 /></div> */}

            {/* <div style={style23}><UseEffect10 /></div> */}
            {/* <div style={style23}><UseEffect11 /></div> */}
            {/* <div style={style23}><UseEffect12 /></div>  */}
            {/* <div style={style23}><UseEffect13 /></div> */}

            {/* <div style={style23}><UseContext11 /></div>
            <div style={style23}><UseContext12 /></div> */}
            {/* <div style={style23}><UseContext13_Auth /></div> */}
            

            {/* <div style={style23}><UseRef11 /></div> */}
            {/* <div style={style23}><UseRef12 /></div> */}
            {/* <div style={style23}><UseRef13 /></div> */}
            
            {/* <div style={style23}><UseReducer11 /></div> */}
            
            {/* <div style={style23}><UseCallback11 /></div> */}
            {/* <div style={style23}><UseCallback12 /></div> */}
            <div>
                <div style={style23}> <UseCallback13_problem /> </div>
                <div style={style23}> <UseCallback13 /> </div>
            </div>
            {/* <div style={style23}><UseMemo11 /></div> */}

        </>
    )
}