/**
 * Created by ivan on 19.03.17.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReduser from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReduser,
        initialState,
        applyMiddleware(thunk, logger))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducers = require('../reducers')
            store.replaceReducer(nextRootReducers)
        })
    }

    return store
}