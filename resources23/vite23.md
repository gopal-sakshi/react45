`Vite`
- large applications ===> the amount of JS modules we are dealing with is also <increasing dramatically>
- 1000s of JS modules
- webpack, rollup, parcel === bundle these JS modules into JS files that can run in browser
- vite === speed up starting <dev server> --- leveraging
    comiple to native languages
    native ES modules in browser

----------------------------------------------------------------------------

npm create vite@latest

----------------------------------------------------------------------------
with respect to vite
- <using js instead of jsx> extension 
- will not yield optimal performance
- as it'll go through unnecessary AST transformation
- https://github.com/vitejs/vite/discussions/3448
