import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'access';
export const REFRESH_TOKEN = 'refresh';

export const getToken = () => ({
  accessToken: Cookies.get(ACCESS_TOKEN),
  refreshToken: Cookies.get(REFRESH_TOKEN),
});
export const setToken = (access_token: string, refresh_token: string) => {
  Cookies.set(ACCESS_TOKEN, access_token, { expires: 29 });
  Cookies.set(REFRESH_TOKEN, refresh_token, { expires: 29 });
};
export const removeToken = () => {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
};
