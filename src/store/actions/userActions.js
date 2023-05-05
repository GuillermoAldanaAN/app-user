import { TYPE_USER } from "../../constants/types";

export const getUserById = () => async dispatch => {

    try {
        const userById = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const userJson = await userById.json();

        dispatch({ type: TYPE_USER.GET_USER_BY_ID, payload: {userJson, userById} })

    } catch (error) {
        console.log(error)
    }
};

//acciones disponibles a nivel apps