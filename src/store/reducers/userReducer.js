import { TYPE_USER } from '../../constants/types';

const INITIAL_STATE = {
    user: {},
    loading: false,
    error: false,
}

const UserReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TYPE_USER.GET_USER_BY_ID:
            return {
                ...state,
                user: action.payload.userJson
            }
        default:
            return state;

    }
}

export default UserReducer;

//actualizacion de state dependiendo el caso