import * as React from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import TicTacToe from './components/others23/tic-tac-toe';
import Dummy23 from './components/others23/dummy23';
import Basics23 from './components/others23/basics23';
import Memo23 from './components/others23/memo23';
import Hooks23 from './hooks23/hooks23';
import Rxjs23 from './rxjs23/1';
import StateActionView from './components/others23/state-action-view';
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
import ManageState11 from './managing_state23/react11';
import ManageState12 from './managing_state23/react12_my_solution';
import React13Form from './managing_state23/react13_form';
import React14LiftingState from './managing_state23/react14_lifting_state';
import React14SyncIp from './managing_state23/react14_sync_inputs';
import React14_Search23 from './managing_state23/react14_search23';
import React14_SwapNames from './managing_state23/react14_swap_names';
import React14_Image from './managing_state23/react14_changeImg';
import Reducer11 from './managing_state23/reducer11';
import Reducer12 from './managing_state23/reducer12';
import Reducer13 from './managing_state23/reducer13';
import Reducer15 from './managing_state23/reducer15_context';
// import Practice23 from './components/practice_addTasks/entry1';     // uses event handlers
import Practice23 from './components/practice_addTasks/entry2';     // uses - reducers, dispatch stuff

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
            <Route exact path="/manageState11" component={ManageState11}></Route>
            <Route exact path="/manageState12" component={ManageState12}></Route>
            <Route exact path="/react13_form" component={React13Form}></Route>
            <Route exact path="/react14_lift_state" component={React14LiftingState}></Route>
            <Route exact path="/react14_sync_ip" component={React14SyncIp}></Route>
            <Route exact path="/react14_search23" component={React14_Search23}></Route>
            <Route exact path="/react14_swap_names" component={React14_SwapNames}></Route>
            <Route exact path="/react14_image" component={React14_Image}></Route>
            <Route exact path="/reducer11" component={Reducer11}></Route>
            <Route exact path="/reducer12" component={Reducer12}></Route>
            <Route exact path="/reducer13" component={Reducer13}></Route>
            <Route exact path="/reducer15" component={Reducer15}></Route>
            <Route exact path="/practice23" component={Practice23}></Route>
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
            <ul>
                <li> <Link to="/manageState11">manageState11 </Link></li>
                <li> <Link to="/manageState12">manageState12 </Link></li>
                <li> <Link to="/react13_form">react13_form </Link></li>
                <li> <Link to="/react14_lift_state">react14_lift_state </Link></li>
                <li> <Link to="/react14_sync_ip">react14_sync_ip </Link></li>
                <li> <Link to="/react14_search23">react14_search23 </Link></li>
                <li> <Link to="/react14_swap_names">react14_swap_names </Link></li>
                <li> <Link to="/react14_image">react14_img </Link></li>
            </ul>
            <ul>
                <li> <Link to="/reducer11">reducer11 </Link></li>
                <li> <Link to="/reducer12">reducer12 </Link></li>
                <li> <Link to="/reducer13">reducer13 </Link></li>
                <li> <Link to="/reducer15">reducer15 </Link></li>
                <li> <Link to="/practice23">practice23 </Link></li>
            </ul>
        </div>
    )
}