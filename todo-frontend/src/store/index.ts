import {applyMiddleware, createStore} from 'redux'

import {rootReducer} from "./root-reducer"


// const composeEnhancers = composeWithDevTools({
// });

// const enhancer = composeEnhancers(applyMiddleware())

const store = createStore(rootReducer /*, enhancer*/)


export default store