import { combineReducers } from 'redux';
import { userReducer } from './user';
const loadingReducer = (state = {}, action) => {
    return {state, ...action.payload };
};
const reducer = combineReducers({
    userInfo: userReducer,
    loader: loadingReducer
});

export default reducer;