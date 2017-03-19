/**
 * Created by ivan on 19.03.17.
 */
import {combineReducers} from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
    page,
    user
})