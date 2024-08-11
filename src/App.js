import * as React from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import TicTacToe from './components/tic-tac-toe';
import Dummy23 from './components/dummy23';
import Basics23 from './components/basics23';
import Memo23 from './components/memo23';
import Hooks23 from './hooks23/use-effect';

export default <Router>
    <div className="App" >
        <Links />
        <Switch>
            <Route exact path="/tic-tac-toe" component={TicTacToe}></Route>
            <Route exact path="/dummy23" component={Dummy23}></Route>
            <Route exact path="/basics23" component={Basics23}></Route>
            <Route exact path="/memo23" component={Memo23}></Route>
            <Route exact path="/hooks23" component={Hooks23}></Route>
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
                <li> <Link to="/memo23">memo23</Link> </li>
            </ul>
            <ul>
            <li> <Link to="/hooks23">Hooks23</Link> </li>
            </ul>
        </div>
    )
}