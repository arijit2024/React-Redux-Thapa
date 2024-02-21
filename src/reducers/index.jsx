import changeTheNumber from './upDown';
import colorChange from './colorChangeNav';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    colorChange
})

export default rootReducer;