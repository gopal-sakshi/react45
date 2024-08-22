import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useNavigate,                 // useNavigate is deprecated
    useRouteMatch,
    useParams
} from "react-router-dom-v5";

function Links23() {
    return (
        <nav>
            <h3> react-router-dom v5 is old - Switch & stuff not present in latest versions </h3>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/users">Users</Link> </li>
                <li> <Link to="/topics">Topics11</Link> </li>
            </ul>
            <button> need to update react-router-dom </button>
        </nav>
    )
}

export default function App() {
    // const navigate = useNavigate();
    return (
        <Router>
            <div>
                <Links23 />
                <Switch>
                    <Route path="/about"> <About /> </Route>
                    <Route path="/users"> <Users /> </Route>
                    <Route path="/topics"> <Topics /> </Route>
                    <Route path="/"> <Home /> </Route>              { /* this route must always be last */ }
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home23</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Topics() {
    let match = useRouteMatch();
    console.log("match ====> ", match)
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li> <Link to={`${match.url}/components`}>Components</Link></li>
                <li> <Link to={`${match.url}/props-v-state`}> Props v. State</Link> </li>
                <li> <Link to={`${match.url}/america23`}> America</Link> </li>
            </ul>
            {/* The Topics page has its own <Switch> with more routes*/}
            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic /></Route>
                <Route path={match.path}><h3>Please select a topic.</h3></Route>
            </Switch>
        </div>
    );
}
  
function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
  