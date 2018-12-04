import { ACTION_TYPES } from '../../action-types';

import { get } from '../../../api';

export const updateUsers = users => ({ type: ACTION_TYPES.UPDATE_USERS, payload: users });

export const getUsers = (searchString) => async dispatch => {
    dispatch({ type: ACTION_TYPES.TOGGLE_SPINNER, payload: { show: true } });
    try {
        const result = await get(`https://api.github.com/search/users?q=${searchString}`);
        dispatch({ type: ACTION_TYPES.UPDATE_USERS, payload: result.items });
    } catch (error) {
        dispatch({ type: ACTION_TYPES.UPDATE_USERS_FAILED, payload: error.message });
    }
    dispatch({ type: ACTION_TYPES.TOGGLE_SPINNER, payload: { show: false } });
};

export const getUser = (url) => async dispatch => {
    dispatch({ type: ACTION_TYPES.TOGGLE_SPINNER, payload: { show: true } });
    dispatch({ type: ACTION_TYPES.UPDATE_USER_INFO, payload: null });
    try {
        const result = await get(url);
        dispatch({ type: ACTION_TYPES.UPDATE_USER_INFO, payload: result });
    } catch (error) {
        dispatch({ type: ACTION_TYPES.UPDATE_USER_INFO_FAILED, payload: error.message });
    }
    dispatch({ type: ACTION_TYPES.TOGGLE_SPINNER, payload: { show: false } });
};