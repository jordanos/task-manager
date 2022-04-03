/* eslint-disable @typescript-eslint/default-param-last */
interface UserState {
  id: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  token: null,
};

function userReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, id: action.payload };
    case 'SET_USER_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_LOG_OUT':
      localStorage.setItem('token', '');
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
