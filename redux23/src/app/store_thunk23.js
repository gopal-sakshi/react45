/*
    @reduxjs/toolkit === if we are using this, thunk middleware is added by default
    no need to use thunk middleware in such case
    
    store_ecommerce24   store   storeTodo   ====> all of them use       @reduxjs/toolkit

    https://github.com/reduxjs/redux-thunk

    but as you can see here === createStore is deprecated...
    they are saying to use @reduxjs/toolkit instead
*/


// JUST SKELETONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))