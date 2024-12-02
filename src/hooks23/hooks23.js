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
import { useState } from "react";
import CustomComp1 from "./custom-comp1";
import CustomComp2 from "./custom-comp2";

var style23 = {
    border: '1px solid', margin: '5px', padding: '5px', width: 'fit-content' 
}

export default function() {

    console.log("hooks malli render ayindi ", new Date().toISOString())

    const [showUseState, setUseState] = useState(false);
    const [showUseCallback, setUseCallback] = useState(false);
    const [showUseContext, setUseContext] = useState(false);
    const [showUseEffect, setUseEffect] = useState(false);
    const [showUseMemo, setUseMemo] = useState(false);
    const [showUseReducer, setUseReducer] = useState(false);
    const [showUseRef, setUseRef] = useState(false);
    const [showCustomComp, setCustomComp] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button onClick = {() => { setCustomComp(!showCustomComp) }}>custom23</button>
                <button onClick = {() => { setUseCallback(!showUseCallback) }}>useCallback</button>
                <button onClick = {() => { setUseContext(!showUseContext) }}>useContext</button>
                <button onClick = {() => { setUseEffect(!showUseEffect) }}>useEffect</button>
                <button onClick = {() => { setUseMemo(!showUseMemo) }}>useMemo</button>
                <button onClick = {() => { setUseReducer(!showUseReducer) }}>useReducer</button>
                <button onClick = {() => { setUseRef(!showUseRef) }}>useRef</button>
                <button onClick = {() => { setUseState(!showUseState) }}>useState</button>
            </div>

            { showCustomComp ? customComp23() : '' }
            { showUseCallback ? useCallback23() : '' }
            { showUseState ?  <div style={style23}><UseState23 /></div> : ' ' } 
            { showUseEffect ? useEffect23() : '' }
            { showUseContext ? useContext23() : '' }
            { showUseRef ? useRef23() : '' }
            { showUseReducer ?  <div style={style23}><UseReducer11 /></div> : '' }
            { showUseMemo ? <div style={style23}><UseMemo11 /></div> : '' }

        </>
    )
}

function customComp23() {
    // const [isHide, setIsHide] = useState(true);                  // ERROR ==== rendered more hooks than previous render
    // setTimeout(() => setIsHide(false), 5000);
    var isHide = true;
    return (
        <>
            <div style={style23}> <CustomComp1 /> </div>
            { isHide ? <div style={style23}> <CustomComp2 /> </div> : ''  }
        </>
    )
}

function useCallback23() {
    return (
        <>
            <div style={style23}><UseCallback11 /></div>
            <div style={style23}><UseCallback12 /></div>
            <div>
                <div style={style23}> <UseCallback13_problem /> </div>
                <div style={style23}> <UseCallback13 /> </div>
            </div>
        </>
    )
}

function useEffect23() {
    return (
        <>
        <div style={style23}><UseEffect10 /></div>
        <div style={style23}><UseEffect11 /></div>
        <div style={style23}><UseEffect12 /></div> 
        <div style={style23}><UseEffect13 /></div>
    </>
    )
}

function useContext23() {
    return (
        <>
            <div style={style23}><UseContext11 /></div>
            <div style={style23}><UseContext12 /></div>
            {/* <div style={style23}><UseContext13_Auth /></div> */}
        </>
    )
}

function useRef23() {
    return (
        <>
            <div style={style23}><UseRef11 /></div>
            <div style={style23}><UseRef12 /></div>
            <div style={style23}><UseRef13 /></div>
        </>
    )
}