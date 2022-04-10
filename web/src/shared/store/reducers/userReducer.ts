/* eslint-disable @typescript-eslint/default-param-last */
export type UserState = {
  id: string | null;
  email: string | null;
  token: string | null;
};

const initialState: UserState = {
  id: null,
  email: null,
  token: null,
};

function userReducer(
  state = initialState,
  action: { type: string; payload: UserState }
) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    case 'SET_USER_ID':
      return { ...state, id: action.payload.id };
    case 'SET_USER_TOKEN':
      return { ...state, token: action.payload.token };
    case 'SET_LOGOUT':
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
