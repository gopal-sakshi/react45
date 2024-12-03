import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./styles23.css";

/***********************************************************************/
import App from "./App";
import routes from "./App";
import One from "./react-router-dom23/1";
import AuthExample from './react-router-dom23/auth23';

import { BrowserRouter } from "react-router-dom-v6";
import RRDv6 from './react-router-dom24/1';

/***********************************************************************/

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        {/* <StrictMode> */}                            {/* running in strict mode == react renders twice; so disabling it */}
            {/* <App /> */}
            {routes}
            {/* <One /> */}
            {/* <AuthExample />         */}
        

            { /* must be wrapped in BrowserRouter  */ }
            {/* <BrowserRouter>
                <RRDv6 />
            </BrowserRouter> */}
        
        {/* </StrictMode> */}
    </>
);


// const myElement11 = React.createElement('h1', {}, 'I do not use JSX!');
// const no_jsx23 = createRoot(document.getElementById('no_jsx23'));
// no_jsx23.render(myElement11);
