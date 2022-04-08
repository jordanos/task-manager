import React from 'react';
import DashboardIcon from 'shared/assets/icons/DashboardIcon';

/* eslint-disable @typescript-eslint/default-param-last */
type ModalType = {
  active: boolean;
  modalType: 'edit' | 'auth';
};

export type NavHeader = {
  title: string;
  icon: React.FC;
};

export type NtwState = {
  error: any;
  loading: boolean;
};

interface AppState {
  modal: ModalType;
  navHeader: NavHeader;
  ntwState: NtwState;
}

const initialState: AppState = {
  modal: {
    active: false,
    modalType: 'edit',
  },
  navHeader: {
    title: '',
    icon: DashboardIcon,
  },
  ntwState: {
    error: null,
    loading: false,
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
    case 'SET_ERROR':
      return {
        ...state,
        ntwState: { ...state.ntwState, error: action.payload },
      };
    default:
      return state;
  }
}

export default appReducer;
