import {combineReducers} from 'redux'
import test, {moduleName} from '../modules/test'

export default combineReducers({
    [moduleName]: test
})