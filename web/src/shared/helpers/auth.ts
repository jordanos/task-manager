import { UserState } from 'shared/store/reducers/userReducer';

export const isLoggedIn = (user: UserState): boolean => {
  if (user.token) return true;
  return false;
};

export const getLocalToken = (): string => {
  const root = localStorage.getItem('persist:root');
  if (!root) return '';
  const rootObj = JSON.parse(root);
  const user = JSON.parse(rootObj.user);
  return user.token || '';
};
