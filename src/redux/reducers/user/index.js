import { ACTION_TYPES } from '../../action-types';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_USERS:
        return { ...state, ... { userList: action.payload } };

    case ACTION_TYPES.UPDATE_USER_INFO:
        return { ...state, ... { selectedUser: action.payload } };

    case ACTION_TYPES.UPDATE_USERS_FAILED:
        return { ...state, ...{ errInGetUsers: action.payload } };

    case ACTION_TYPES.UPDATE_USER_INFO_FAILED:
        // debugger;
        return { ...state, ...{ errInGetUser: action.payload } };
    default:
        return state;
    }
};