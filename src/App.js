import * as React from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import TicTacToe from './components/tic-tac-toe';
import Dummy23 from './components/dummy23';
import Basics23 from './components/basics23';
import Memo23 from './components/memo23';
import Hooks23 from './hooks23/hooks23';
import Rxjs23 from './rxjs23/1';
import StateActionView from './components/state-action-view';
import Button1 from './interactivity23/btn1';
import Button2 from './interactivity23/btn2';
import Button3 from './interactivity23/btn3';
import Button4 from './interactivity23/btn4';

import State11 from './interactivity23/state11';
// import State11 from './interactivity23/state11_twice';
import StateSnapshot12 from './interactivity23/state12_snapshot';
import StateSnapshot13 from './interactivity23/state13_snapshot';
import State15Batches from './interactivity23/state15_batches';
import State16UpdateObj from './interactivity23/state16_updateObj';
import State19UpdateArr from './interactivity23/state19_updateArray1';

export default <Router>
    <div className="App" >
        <Links />
        <Switch>
            <Route exact path="/tic-tac-toe" component={TicTacToe}></Route>
            <Route exact path="/dummy23" component={Dummy23}></Route>
            <Route exact path="/basics23" component={Basics23}></Route>
            <Route exact path="/state-action-view" component={StateActionView}></Route>
            <Route exact path="/memo23" component={Memo23}></Route>
            <Route exact path="/interactive11" component={Button1}></Route>
            <Route exact path="/interactive12" component={Button2}></Route>
            <Route exact path="/interactive13" component={Button3}></Route>
            <Route exact path="/interactive14" component={Button4}></Route>
            <Route exact path="/state11" component={State11}></Route>
            <Route exact path="/state12_snapshot" component={StateSnapshot12}></Route>
            <Route exact path="/state13_snapshot" component={StateSnapshot13}></Route>
            <Route exact path="/state15_batches" component={State15Batches}></Route>
            <Route exact path="/state16_updateObj" component={State16UpdateObj}></Route>
            <Route exact path="/state19_updateArray1" component={State19UpdateArr}></Route>
            <Route exact path="/hooks23" component={Hooks23}></Route>
            <Route exact path="/rxjs23" component={Rxjs23}></Route>
            <Route exact path="/">home route babai</Route>
        </Switch>
    </div>
</Router>

function Links() {
    return (
        <div style={{ display:'flex', flexDirection:'row' }}>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/tic-tac-toe">tic tac toe</Link> </li>
                <li> <Link to="/dummy23">Dummy</Link> </li>
                <li> <Link to="/basics23">Basics23</Link> </li>
                <li> <Link to="/state-action-view">State_Action_View</Link> </li>
            </ul>
            <ul>
                <li> <Link to="/memo23">memo23</Link> </li>
                <li> <Link to="/hooks23">Hooks23</Link> </li>
                <li> <Link to="/rxjs23">Rxjs23</Link> </li>
            </ul>
            <ul>
                <li> <Link to="/interactive11">btn1/hover</Link> </li>
                <li> <Link to="/interactive12">btn2</Link> </li>
                <li> <Link to="/interactive13">btn3</Link> </li>
                <li> <Link to="/interactive14">btn4</Link> </li>
                <li> <Link to="/state11">state11</Link> </li>
            </ul>
            <ul>
                <li> <Link to="/state12_snapshot">state12 snapshot</Link> </li>
                <li> <Link to="/state13_snapshot">state13 snapshot</Link> </li>
                <li> <Link to="/state15_batches">state15 batches</Link> </li>
                <li> <Link to="/state16_updateObj">state16 update Obj</Link> </li>
                <li> <Link to="/state19_updateArray1">state19_updateArray1</Link> </li>
            </ul>
        </div>
    )
}