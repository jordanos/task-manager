/* eslint-disable @typescript-eslint/default-param-last */
type Modal = {
  active: boolean;
};

export type NavHeader = {
  title: string;
  icon: any;
};

interface AppState {
  modal: Modal;
  navHeader: NavHeader;
}

const initialState: AppState = {
  modal: {
    active: false,
  },
  navHeader: {
    title: '',
    icon: '',
  },
};

function appReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_MODAL_VIEW':
      return {
        ...state,
        modal: { ...state.modal, active: !state.modal.active },
      };
    case 'SET_NAV_HEADER':
      return {
        ...state,
        navHeader: {
          ...state.navHeader,
          title: action.payload.title,
          icon: action.payload.icon,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
